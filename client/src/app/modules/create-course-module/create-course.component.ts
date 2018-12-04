import { Component, Input } from '@angular/core';
import { Course } from '../../shared/models/course';
import { CourseService } from '../../shared/services/course/course.service';

@Component({
  selector: 'create-course-root',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent 
{
  course: Course;

  constructor(private courseService: CourseService) {}

  ngOnInit() 
  {
    this.course = new Course;
  }

  onCreateClicked()
  {    
    this.courseService.createCourse(this.course);
  }

  onSwitchToPublicClicked()
  {
    this.course.private = false;
  }

  onSwitchToPrivateClicked()
  {
    this.course.private = true;
  }
}
