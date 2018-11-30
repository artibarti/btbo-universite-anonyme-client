import { Component, Input } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../shared/models/course';
import { CourseService } from '../../shared/services/course/course.service';
import { CourseModuleService } from './services/course-module.service';

@Component({
  selector: 'course-root',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent 
{
  constructor(private sessionService: SessionService, private router: Router, 
    private route: ActivatedRoute, private courseService: CourseService,
    private courseModuleService: CourseModuleService) {}

  ngOnInit()
  {
    this.route.params.subscribe(params => {
      this.courseModuleService.setCourse( params['id'] );
    });
  }

}
