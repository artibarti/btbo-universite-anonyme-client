import { Component, OnInit } from '@angular/core';
import { CourseSession } from '../../../../shared/models/session';
import { CourseService } from '../../../../shared/services/course/course.service';
import { SharedObjects } from '../../services/shared-objects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.scss']
})
export class CourseSettingsComponent implements OnInit {

  constructor(private courseService: CourseService,
      private sharedObjects: SharedObjects,
      private router: Router) { }

  ngOnInit() {}

  onLeaveCourseClicked() {
    this.courseService.leaveCourse(this.sharedObjects.course.id.toString()).then(
      res => {
        this.router.navigate(['home']);
      }
    );
  }

}
