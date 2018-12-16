import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SessionService } from '../session/session.service';
import { Question } from '../../models/question';
import { CourseSession } from '../../models/session';

@Injectable()
export class CourseSessionService {

  constructor(private http: HttpClient, private sessionService: SessionService) {}

  createSession(session: CourseSession) {
    const url = this.sessionService.apiURL + '/sessions/create';
    return this.http.post(url, {'id' : session.id, 'name' : session.name,
      'courseId' : session.courseId, 'active' :  session.active} ,
      {headers: {'token' : this.sessionService.token}}).toPromise();
  }

  startSession(sessionID: string) {
    const url = this.sessionService.apiURL
      + 'sessions/' + sessionID + '/activate';
    return this.http.post<any>(url, {headers : {'status' : true}}).toPromise();
  }

  stopSession(sessionID: string) {
    const url = this.sessionService.apiURL
      + 'sessions/' + sessionID + '/activate';
    return this.http.post<any>(url, {headers : {'status' : false}}).toPromise();
  }

  getQuestionsForActiveSessions(sessionID: string): Promise<Observable<Question>> {
    const url = this.sessionService.apiURL
      + '/sessions/' + sessionID + '/questions';

    return this.http.get<any>(url, {headers: {'token' : this.sessionService.token }}).toPromise();
  }

  postQuestion(question: string, sessionID: string) {
    const url = this.sessionService.apiURL
      + '/sessions/' + sessionID + '/questions/add';

    return this.http.post<any>(url, question, {headers: {'token' : this.sessionService.token }}).toPromise();
  }
}
