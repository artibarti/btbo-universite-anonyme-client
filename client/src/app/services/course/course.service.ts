import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../../services/session/session.service'

@Injectable()
export class CourseService {

  constructor(private http: HttpClient, private sessionService : SessionService) {}

  getAllCoursesForUser(id : string) : Observable<any> 
  {
    var url = "//" + this.sessionService.serverName
      + ":" + this.sessionService.portNumber
      + "/users/" + id + "/courses";
    
      return this.http.get(url);    
  }

  getAll(): Observable<any> 
  {
    var url = "//" + this.sessionService.serverName
      + ":" + this.sessionService.portNumber
      + "/courses";

    return this.http.get(url);    
  }
}
