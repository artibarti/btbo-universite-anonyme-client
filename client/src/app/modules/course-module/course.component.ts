import { Component, Input } from '@angular/core';
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
    this.course = new Course;

    this.route.params.subscribe(params => {
      this.course.id = params['id'];
    });
  }

}
