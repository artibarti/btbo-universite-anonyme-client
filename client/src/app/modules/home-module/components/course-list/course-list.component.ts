import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course/course.service'
import { SessionService } from '../../../../shared/services/session/session.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  courses: Array<any>

  constructor(private sessionService: SessionService, private courseService : CourseService) 
  {

  }

  ngOnInit() {
    this.courseService.getAllCoursesForUser(this.sessionService.currentUser.id)
      .subscribe(data => {
        this.courses = data;});
  }

}
