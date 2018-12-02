import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { CourseSessionService } from '../../../../shared/services/course-session/course-session.service';
import { SharedObjects } from '../../services/shared-objects.service';
import { CourseService } from '../../../../shared/services/course/course.service';
import { CourseSession } from '../../../../shared/models/session';

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
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  sessions: CourseSession[] = [];

  mySessionFilter: string;

  constructor(private courseService: CourseService, 
    private sharedObjects: SharedObjects) {}

  ngOnInit() 
  {
    this.courseService.getSessionsForCourse(this.sharedObjects.course.id).then(
      res => {        
        res.forEach(p => this.sessions.push(p));
      });
  }

}
