import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../../../../shared/services/session/session.service'

@Injectable()
export class CourseService {

  constructor(private http: HttpClient, private sessionService : SessionService) {}

  getAllCoursesForCurrentUser() : Observable<any> 
  {
    var url = "//" + this.sessionService.serverName
      + ":" + this.sessionService.portNumber
      + "/users/" + this.sessionService.currentUser.id + "/courses";
    
      return this.http.get(url);    
  }
}
