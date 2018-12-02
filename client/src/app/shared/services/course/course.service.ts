import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../session/session.service';
import { Course } from '../../models/course';
import { CoursePulse } from '../../models/coursePulse';
import { CourseSession } from '../../models/session';
import { CourseRoom } from '../../models/courseRoom';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient, private sessionService : SessionService) {}

  getAllSubscribtionForCurrentUser() : Promise<Observable<Course>>
  {
    var url = this.sessionService.apiURL 
      + "/users/" + this.sessionService.currentUser.id + "/subs";
    
    return this.http.get<any>(url).toPromise();
  }

  getAdminedCoursesForCurrentUser() : Promise<Observable<Course>>
  {
    var url = this.sessionService.apiURL 
      + "/users/" + this.sessionService.currentUser.id + "/adminroles";
    
    return this.http.get<any>(url).toPromise();
  }

  getCourseDetails(id: string) : Promise<Observable<Course>> 
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + id;
    
    return this.http.get<any>(url).toPromise();    
  }

  getCoursePulse(id: string) : Promise<Observable<CoursePulse>>
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + id + "/pulse";
    return this.http.get<any>(url).toPromise();    
  }

  addCourse(course: Course)
  {
    var url = this.sessionService.apiURL 
      + "/courses/add";
    this.http.post(url, course);
  }

  getSessionsForCourse(courseID: string) : Promise<Observable<CourseSession>>
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + courseID + "/sessions";
    return this.http.get<any>(url).toPromise();
  }
  
  getCourseSubsSumForCourse(courseID: string)
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + courseID + "/subs/sum";
    this.http.get<any>(url);
  }

  getCourseRoomsForCourse(courseID: string) : Promise<Observable<CourseRoom>>
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + courseID + "/rooms";
    return this.http.get<any>(url).toPromise();
  }
}
