import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http'
import { SessionService } from '../session/session.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //https://github.com/cornflourblue/angular-7-registration-login-example-cli/blob/master/src/app/login/login.component.ts

  hashPasswd(password: String) : String
  {
    return password;
  }

  validateUserLogin(credentials) : boolean
  {     
    
    const headers = new HttpHeaders (credentials);
    const requestOptions = {                                                                                                                                                                                 
      headers: headers, 
    };
    
    this.http.get("//localhost:8080/login", requestOptions).subscribe(response => {
        if (response['name']) {
            this.sessionService.authenticated = true;
            this.sessionService.currentUser.username = response['name'];
            this.sessionService.currentUser.id = response['id'];
            return true;
        } else {
            this.sessionService.authenticated = false;
            return false;
        }
    });
    return false;
  }

  constructor(private http: HttpClient, private sessionService: SessionService) { }
}
