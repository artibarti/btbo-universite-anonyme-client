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

  inviteCode: string = "";
  errorMsg: string = "Invite code is unacceptable";
  showError: boolean = false;

  courses: Course[] = [];

  constructor(private courseService: CourseService, private route: Router) { }

  ngOnInit() 
  {    
    this.inviteCode = "";
    this.showError = false;
    this.courses = [];

    this.courseService.getHotCourses().then(
      res => {
        res.forEach(p => this.courses.push(p));
      }
    )
  }

  onJoinClicked()
  {
    if (this.inviteCode != "")
    {
      this.showError = true;
    }

    this.courseService.joinCourseWithInviteCode(this.inviteCode).then(
      res => {
        this.route.navigate(["/home"]);
      });
  }

  onJoinFreeCourseClicked(id: string)
  {
    this.courseService.joinFreeCourseWithoutInviteCode(id).then(
      res => {
        this.route.navigate(["home"]);
      }
    )
  } 

}
