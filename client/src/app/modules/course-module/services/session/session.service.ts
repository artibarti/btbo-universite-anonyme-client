import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../../../../shared/services/session/session.service'

@Injectable()
export class CourseSessionService 
{

  constructor(private http: HttpClient, private sessionService : SessionService) {}

  getAllSessionsForCourse(id : string) : Observable<any> 
  {
    var url = this.sessionService.serverName
      + ":" + this.sessionService.portNumber
      + "/courses/" + id + "/sessions";
    
      return this.http.get(url);    
  }

}
