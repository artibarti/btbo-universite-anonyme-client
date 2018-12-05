import { Component, Input } from '@angular/core';
import { Course } from '../../shared/models/course';
import { CourseService } from '../../shared/services/course/course.service';
import { InviteCode } from '../../shared/models/inviteCode';
import { Router } from '@angular/router';

@Component({
  selector: 'create-course-root',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent 
{
  course: Course;

  persistentInviteCode: InviteCode;
  expirationInviteCode: InviteCode;
  limitationInviteCode: InviteCode;

  addPersistentInviteCode: boolean = true;
  addExpirationInviteCode: boolean = false;
  addLimitationInviteCode: boolean = false;

  errorMsg: string = "All fields are required!";
  showError: boolean = false;

  constructor(private courseService: CourseService, private router: Router) {}

  ngOnInit() 
  {
    this.course = new Course;
    this.persistentInviteCode = new InviteCode;
    this.expirationInviteCode = new InviteCode;
    this.limitationInviteCode = new InviteCode;

    this.persistentInviteCode.maxCopy = "-1";
    this.expirationInviteCode.maxCopy = "-1";
  }

  onCreateClicked()
  {    
    if (this.course.name == "" || this.course.description == "")
    {
      this.showError = true;
    }
    else
    {
      this.courseService.createCourse(this.course).then(
        res => {
          
          let id = res.id;

          if (this.addPersistentInviteCode && this.course.hidden)
            this.courseService.addInviteCodeToCourse(id, this.persistentInviteCode);
          
          this.router.navigate(["/home"]);

      });  
    }
  }

  onSwitchToPublicClicked()
  {
    this.course.hidden = false;
  }

  onSwitchToPrivateClicked()
  {
    this.course.hidden = true;
  }
}
