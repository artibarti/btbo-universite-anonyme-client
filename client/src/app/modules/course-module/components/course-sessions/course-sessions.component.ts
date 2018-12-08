import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { CourseSession } from '../../../../shared/models/session';
import { CourseService } from '../../../../shared/services/course/course.service';
import { SharedObjects } from '../../services/shared-objects.service';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform 
{
  transform(items: any[], searchText: string): any[] 
  {
    if(!items) return [];
    if(!searchText) return items;
  
    searchText = searchText.toLowerCase();
    return items.filter( it => 
      {
        return it.name.toLowerCase().includes(searchText);
      });
   }
}

@Component({
  selector: 'app-course-sessions',
  templateUrl: './course-sessions.component.html',
  styleUrls: ['./course-sessions.component.scss']
})
export class CourseSessionsComponent implements OnInit {

  sessions: CourseSession[] = [];
  mySessionFilter: string;

  constructor(private courseService: CourseService, private sharedObjects: SharedObjects) {}

  ngOnInit() 
  {
    this.courseService.getSessionsForCourse(this.sharedObjects.course.id).then(
      res => {
        res.forEach(p => this.sessions.push(p));
      });
  }

}
