import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../shared/services/course/course.service';
import { Course } from '../../../../shared/models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discover-courses',
  templateUrl: './discover-courses.component.html',
  styleUrls: ['./discover-courses.component.scss']
})
export class DiscoverCoursesComponent implements OnInit {

  inviteCode = '';
  errorMsg = 'Invite code is unacceptable';
  showError = false;

  courses: Course[] = [];

  constructor(private courseService: CourseService, private route: Router) { }

  ngOnInit() {
    this.inviteCode = '';
    this.showError = false;
    this.courses = [];

    this.courseService.getHotCourses().then(
      res => {
        res.forEach(p => this.courses.push(p));
      }
    );
  }

  onJoinClicked() {
    if (this.inviteCode == '') {
      this.showError = true;
    } else {
      this.courseService.joinCourseWithInviteCode(this.inviteCode).then(
        res => {
          if (res != null) {
            this.route.navigate(['/home']);
          } else {
            this.showError = true;
          }
        });
    }
  }

  onJoinFreeCourseClicked(id: string) {
    this.courseService.joinFreeCourseWithoutInviteCode(id).then(
      res => {
        this.route.navigate(['home']);
      }
    );
  }

}
