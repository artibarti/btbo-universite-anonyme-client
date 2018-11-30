import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../session/session.service';
import { Course } from '../../models/course';

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
      + "/users/" + this.sessionService.currentUser.id + "/admin";
    
    return this.http.get<any>(url).toPromise();
  }

  getCourseDetails(id: string) : Promise<Observable<Course>> 
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + id;
    
    return this.http.get<any>(url).toPromise();    
  }

  getCoursePulse(id: string) : Promise<Observable<string>>
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + id + "/pulse";
    return this.http.get<any>(url).toPromise();    
  }

}
