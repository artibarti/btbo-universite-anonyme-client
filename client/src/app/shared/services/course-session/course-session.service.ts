import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../session/session.service';
import { Question } from '../../models/question';
import { CourseSession } from '../../models/session';

@Injectable()
export class CourseSessionService 
{

  constructor(private http: HttpClient, private sessionService : SessionService) {}

  createSession(session: CourseSession)
  {
    var url = this.sessionService.apiURL;
    return this.http.get<any>(url, {headers: {"token" : this.sessionService.token}}).toPromise();    
  }

  getQuestionsForSession(courseID: string, sessionID: string) : Promise<Observable<Question>>
  {
    var url = this.sessionService.apiURL 
      + "/courses/" + courseID + "/sessions/" + sessionID + "/questions";
    return this.http.get<any>(url).toPromise();
  }

}
