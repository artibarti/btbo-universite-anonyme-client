import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseSession } from '../../../../shared/models/session'
import { Session } from 'protractor';
import { CourseSessionService } from 'src/app/shared/services/course-session/course-session.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  courseID: string;
  session: CourseSession;

  constructor(private route: ActivatedRoute, private courseSessionService: CourseSessionService) 
  { 
    console.log("constructor");
  }

  ngOnInit() 
  {
    this.route.params.subscribe(params => {
      this.courseID = params['id'];
    });

    this.session = new CourseSession();
  }

  onCreateClicked()
  {
    this.courseSessionService.createSession(this.session)
  }
}
