import { Component } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service'
import { Router } from '@angular/router';

@Component({
  selector: 'course-root',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent 
{
  id: number;

  constructor(private sessionService: SessionService, private router: Router) 
  {
    this.router.navigate(['course/:id/room'])
  }
}
