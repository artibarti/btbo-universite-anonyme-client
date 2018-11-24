import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course/course.service'
import { SessionService } from '../../../../shared/services/session/session.service'
import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core'; 

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

  ngOnInit() {
    
    /*
    this.courseService.getAllCoursesForUser(this.sessionService.currentUser.id)
      .subscribe(data => {
        this.courses = data;});
    */
    
    this.courseService.getAll()
      .subscribe(data => {
        this.courses = data;});
  }

}
