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

  validateRegistration(credentials) : boolean
  {
    var registrationSuccess = false;

    const headers = new HttpHeaders (credentials);
    const requestHeader = {                                                                                                                                                                                 
      headers: headers, 
    };
    
    this.http.get("//localhost:8080/register", requestHeader).subscribe(response => {
        if (response['email']) {
            registrationSuccess = true;
        } else {
            registrationSuccess = false;
        }
    });
    return registrationSuccess;
  }

  validateLogin(credentials) : boolean
  {     

    const headers = new HttpHeaders (credentials);
    const requestHeader = {                                                                                                                                                                                 
      headers: headers, 
    };
    
    this.http.get("//localhost:8080/login", requestHeader).subscribe(response => {
        if (response['email']) {
            this.sessionService.authenticated = true;
            this.sessionService.currentUser.email = response['email'];
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
