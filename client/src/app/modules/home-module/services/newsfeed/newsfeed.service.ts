import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../../../../shared/services/session/session.service'

@Injectable()
export class NewsFeedService {

  constructor(private http: HttpClient, private sessionService : SessionService) {}

  getNewsFeedForUser(id : string) : Observable<any> 
  {
    var url = this.sessionService.apiURL
      + "/user/newsfeed";
    
      return this.http.get(url, {headers : {'token' : this.sessionService.token}});    
  }
}
