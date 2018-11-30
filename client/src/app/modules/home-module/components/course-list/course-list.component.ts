import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../shared/services/session/session.service'
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core'; 
import { CourseService } from '../../../../shared/services/course/course.service';

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
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Array<any>
  subsFilter: string;
  myCoursesFilter: string;

  constructor(private sessionService: SessionService, private courseService : CourseService) 
  {

  }

  inFilter(name: string) : boolean
  {
    return false;
  }

  ngOnInit() 
  {      
    this.courseService.getAllSubscribtionForCurrentUser()
      .subscribe(data => {
        this.courses = data;});
  }

}
