import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../session/session.service';
import { Course } from '../../models/course';
import { CoursePulse } from '../../models/coursePulse';
import { CourseSession } from '../../models/session';
import { CourseRoom } from '../../models/courseRoom';
import { Router } from '@angular/router';
import { log } from 'util';
import { InviteCode } from '../../models/inviteCode';

@Injectable()
export class CourseService {

  constructor(private http: HttpClient, private sessionService : SessionService,
    private router: Router) {}


  getAllSubscribtionForCurrentUser() : Promise<Observable<Course>>
  {
    var url = this.sessionService.apiURL 
      + "/user/subs";
    
    return this.http.get<any>(url, { headers : 
      {'token' : this.sessionService.token}}).toPromise();
  }

  getAdminedCoursesForCurrentUser() : Promise<Observable<Course>>
  {    
    var url = this.sessionService.apiURL 
      + "/user/adminroles";
    
    return this.http.get<any>(url, {headers : 
      {'token' : this.sessionService.token}}).toPromise();
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

  createCourse(course: Course) : Promise<Course>
  {    
    var url = this.sessionService.apiURL 
      + "/courses/add";

    return this.http.post<Course>(url, {'name' : course.name, 'description' : course.description, 'hidden' : course.hidden}, 
        {headers : {'token' : this.sessionService.token}}).toPromise();
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
    return this.http.get<any>(url, {headers: {"token" : this.sessionService.token}}).toPromise();
  }

  getCourseRatingsSumForCourse(courseID: string)
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + courseID + "/ratings/sum";
    return this.http.get<any>(url, 
      {headers : {"token" : this.sessionService.token}}).toPromise();
  }

  getCourseRoomsForCourse(courseID: string) : Promise<Observable<CourseRoom>>
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + courseID + "/rooms";

    return this.http.get<any>(url).toPromise();
  }

  addInviteCodeToCourse(courseID: string, invitecode: InviteCode)
  {
    var url = this.sessionService.apiURL
      + "/courses/" + courseID + "/invitecodes/generate";
    
    return this.http.post(url, {"id": invitecode.id, "maxCopy" : invitecode.maxCopy, 
          "validUntil" : invitecode.validUntil, "code" : invitecode.code}, 
      {headers: {'token' : this.sessionService.token}}).toPromise();
  }

  joinCourseWithInviteCode(code: string)
  {
    var url = this.sessionService.apiURL
      + "/courses/subscribe";

    return this.http.get<any>(url, {headers: {"code" : code, 
      "token" : this.sessionService.token}}).toPromise();
  }

  joinFreeCourseWithoutInviteCode(id : string)
  {
    var url = this.sessionService.apiURL
      + "/courses/" + id + "/subscribe";

    return this.http.get<Course>(url, {headers: 
      {"token" : this.sessionService.token}}).toPromise();
  }

  getHotCourses() : Promise<Observable<Course>>
  {
    var url = this.sessionService.apiURL
      + "/courses/hot";

    return this.http.get<any>(url, 
      {headers: {"token" : this.sessionService.token}}).toPromise();
  }

  deleteCourse(id: string)
  {
    var url = this.sessionService.apiURL
      + "/courses/" + id + "/delete";

    return this.http.delete<any>(url,
      {headers: {"token" : this.sessionService.token}}).toPromise();
  }

  leaveCourse(id: string)
  {
    var url = this.sessionService.apiURL
      + "/courses/" + id + "/leave";

    return this.http.get<any>(url,
      {headers: {"token" : this.sessionService.token}}).toPromise();    
  }

  getActiveSessionForCourse(id: string) : Promise<Observable<CourseSession>>
  {
    var url = this.sessionService.apiURL
      + "/courses/" + id + "/activesession";

    return this.http.get<any>(url,
      {headers: {"token" : this.sessionService.token}}).toPromise();      
  }

  amITheOwner(id: string)
  {
    var url = this.sessionService.apiURL
      + "/courses/" + id + "/owner/isme";

    return this.http.get<any>(url,
      {headers: {"token" : this.sessionService.token}}).toPromise();      
  }

  killActiveSession(sessionID: string)
  {
    var url = this.sessionService.apiURL
      + "/sessions/" + sessionID + "/deactivateSession";

    return this.http.post<any>(url, null,
      {headers: {"token" : this.sessionService.token}}).toPromise();      

  }

  didIRateThisCourseAlready(id: string)
  {
    var url = this.sessionService.apiURL +
      "/courses/" + id + "/alreadyRated";
      
    return this.http.get<boolean>(url, 
      {headers : {"token" : this.sessionService.token }}).toPromise();

  }

  rateCourse(id: string)
  {
    var url = this.sessionService.apiURL + 
      "/courses/" + id + "/ratings/add/1";

    return this.http.post(url, null, 
      {headers: {"token" : this.sessionService.token}}).toPromise();

  }

  removeRateFromCourse(id: string)
  {
    var url = this.sessionService.apiURL + 
      "/courses/" + id + "/ratings/remove";

    return this.http.get(url, {headers: 
      {"token" : this.sessionService.token}}).toPromise();

  }
}
