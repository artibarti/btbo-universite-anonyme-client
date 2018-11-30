import { Component } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../shared/models/course';

@Component({
  selector: 'course-root',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent 
{
  private course: Course;

  constructor(private sessionService: SessionService, private router: Router, private route: ActivatedRoute) 
  {
    // this.router.navigate(['course/:id/room'])
  }

  ngOnInit()
  {
    let tmp = this.route.params.subscribe(params => {
      this.course = params['course'];
    });
  }

}
