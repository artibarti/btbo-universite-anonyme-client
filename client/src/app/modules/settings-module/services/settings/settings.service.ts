import { Injectable } from '@angular/core';
import { User } from '../../../../shared/models/user'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from '../../../../shared/services/session/session.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) {}

  updateProfile(user: User)
  {    
    var url = this.sessionService.apiURL 
      + "/users/" + this.sessionService.currentUser.id + "/update";
      
    this.http.put(url, JSON.stringify(user));
  }

}
