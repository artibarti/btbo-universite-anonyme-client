import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { SessionService } from '../../../../shared/services/session/session.service'

@Injectable()
export class NewsFeedService {

  constructor(private http: HttpClient, private sessionService : SessionService) {}

  getNewsFeedForUser() : Promise<Observable<any>>
  {
    console.log("getting nwesfeed");

    var url = this.sessionService.apiURL
      + "/user/newsfeed";
    
    return this.http.get<any>(url, {headers : {"token" : this.sessionService.token}}).toPromise();    
  }
}
