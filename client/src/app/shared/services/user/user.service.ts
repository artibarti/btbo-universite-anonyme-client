import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionService } from '../session/session.service';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private sessionService: SessionService, private http: HttpClient, private router: Router) {}

  getUserRating() {
    const url = this.sessionService.apiURL +
      '/user/points';

    return this.http.get<any>(url, {headers: {'token' : this.sessionService.token}}).toPromise();
  }

  updateProfile(user: User) {
    const url = this.sessionService.apiURL + '/user/update';
    return this.http.put<any>(url, {'token' : '', 'firstName' : user.firstName, 'lastName' : user.lastName, 'email' : user.email},
{headers: {'token' : this.sessionService.token}}).toPromise();
  }

}
