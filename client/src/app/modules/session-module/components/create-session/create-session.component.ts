import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseSession } from '../../../../shared/models/session'
import { Session } from 'protractor';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  courseID: string;
  session: CourseSession;

  constructor(private route: ActivatedRoute) 
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

}
