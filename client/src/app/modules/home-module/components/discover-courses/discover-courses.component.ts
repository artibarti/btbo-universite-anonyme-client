import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../../../shared/services/course/course.service';

@Component({
  selector: 'app-discover-courses',
  templateUrl: './discover-courses.component.html',
  styleUrls: ['./discover-courses.component.scss']
})
export class DiscoverCoursesComponent implements OnInit {

  inviteCode: string = "";
  errorMsg: string = "Invite code is unacceptable";
  showError: boolean = false;

  constructor(private courseService: CourseService) { }

  ngOnInit() 
  {
    this.inviteCode = "";
  }

  onJoinClicked()
  {
    if (this.inviteCode != "")
    {
      this.showError = true;
    }

    this.courseService.joinCourseWithInviteCode(this.inviteCode);
  }

}
