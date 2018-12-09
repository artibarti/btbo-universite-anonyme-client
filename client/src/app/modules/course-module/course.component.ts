import { Component, Input } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Course } from '../../shared/models/course';
import { CourseService } from '../../shared/services/course/course.service';
import { SharedObjects } from './services/shared-objects.service';
import { log } from 'util';

@Component({
  selector: 'course-root',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent 
{
  constructor(private router: Router, private route: ActivatedRoute,
    private sharedObjects: SharedObjects, private courseService: CourseService) {}

  numberOfSubs : string;

  ngOnInit()
  {    
    this.route.params.subscribe(params => {
      this.sharedObjects.setCourse( params['id'] );
    });

    this.courseService.getCourseSubsSumForCourse(this.sharedObjects.course.id).then(
      res => {
        this.numberOfSubs = res;
      });
  }

}
