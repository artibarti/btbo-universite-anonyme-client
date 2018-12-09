import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../shared/services/course/course.service';
import { Router } from '@angular/router';
import { SharedObjects } from '../../services/shared-objects.service';

@Component({
  selector: 'app-course-owner-settings',
  templateUrl: './course-owner-settings.component.html',
  styleUrls: ['./course-owner-settings.component.scss']
})
export class CourseOwnerSettingsComponent implements OnInit {

  constructor(private courseService: CourseService, private router: Router,
      private sharedObjects: SharedObjects) { }

  ngOnInit() 
  {
  
  }

  onDeleteCourseClicked()
  {

    this.courseService.deleteCourse(this.sharedObjects.course.id).then(
      res => {
        this.router.navigate(['/home']);
      });
  }

}
