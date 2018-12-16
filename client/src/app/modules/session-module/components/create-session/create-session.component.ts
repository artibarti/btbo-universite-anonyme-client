import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseSession } from '../../../../shared/models/session';
import { Session } from 'protractor';
import { CourseSessionService } from '../../../../shared/services/course-session/course-session.service';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  courseID: string;
  session: CourseSession;

  constructor(private route: ActivatedRoute, private courseSessionService: CourseSessionService,
    private router: Router) {
    console.log('constructor');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.courseID = params['id'];
    });

    this.session = new CourseSession();
    this.session.courseId = this.courseID;
    this.session.active = true;
  }

  onCreateClicked() {
    this.courseSessionService.createSession(this.session).then(
      res => {
        this.router.navigate(['/course', this.courseID]);
      }
    );
  }

}
