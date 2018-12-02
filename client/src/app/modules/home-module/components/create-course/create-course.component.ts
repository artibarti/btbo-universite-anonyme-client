import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../shared/models/course';
import { CourseService } from '../../../../shared/services/course/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  course: Course;

  constructor(private courseService: CourseService) {}

  ngOnInit() 
  {
    this.course = new Course;
  }

  onCreateClicked()
  {
    this.courseService.addCourse(this.course);
  }
}
