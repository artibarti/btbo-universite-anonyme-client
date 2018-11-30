import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../shared/models/course';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  course: Course;

  constructor() {}

  ngOnInit() 
  {
    this.course = new Course;
  }

}
