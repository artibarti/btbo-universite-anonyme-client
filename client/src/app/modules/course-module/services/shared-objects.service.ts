import { Course } from '../../../shared/models/course';
import { Injectable } from '@angular/core';
import { CourseService } from '../../../shared/services/course/course.service';
import { CoursePulse } from '../../../shared/models/coursePulse';
import { Observable } from 'rxjs';
import { CourseSession } from '../../../shared/models/session';

@Injectable({
    providedIn: 'root'
  })
export class SharedObjects {

    course: Course;
    activeSession: CourseSession = null;
    amITheOwner = false;
    didIRateThisCourseAlready = false;
    inviteCode = '';

    refreshRating() {
        this.courseService.getCourseRatingsSumForCourse(this.course.id).then(
            res => {
              this.course.rating = res['sum'];
            });
    }

    setCourse(id: string) {
        this.course = new Course;
        this.course.id = id;

        this.courseService.getCourseDetails(id).then(
            res => {
                this.course.name = res['name'];
                this.course.description = res['description'];
                this.course.rating = res['rating'];
                this.course.subNumber = res ['subNumber'];
            });

        this.courseService.getActiveSessionForCourse(id).then(
            res => {
                if (res != null) {
                    this.activeSession = new CourseSession;
                    this.activeSession.name = res['name'];
                    this.activeSession.id = res['id'];
                    this.activeSession.courseId = id;
                } else {
                    this.activeSession = null;
                }
            });

        this.courseService.amITheOwner(id).then(
            res => {
                if (res === 1) {
                    this.amITheOwner = true;
                } else {
                    this.amITheOwner = false;
                }
            }
        );

        this.courseService.didIRateThisCourseAlready(id).then(
            res => {
                this.didIRateThisCourseAlready = res;
            }
        );

        this.courseService.getInviteCodeForCourse(id).then(
          res => {
            this.inviteCode = res.toString();
          }
        );
    }

    constructor(private courseService: CourseService) {
        this.course = new Course;
    }
}
