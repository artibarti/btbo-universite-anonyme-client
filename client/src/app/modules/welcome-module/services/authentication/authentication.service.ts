import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http'
import { SessionService } from '../../../../shared/services/session/session.service'
import { Observable } from 'rxjs/Observable'

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
    const headers = new HttpHeaders (credentials);
    const requestHeader = {                                                                                                                                                                                 
      headers: headers, 
    };

    var url = "//" + this.sessionService.serverName + ":" + this.sessionService.portNumber + "/register";

    this.http.get(url, requestHeader).subscribe(response => {
        if (response['email']) 
        {
            this.sessionService.currentUser.email = response['email'];
            this.sessionService.currentUser.name = response['name'];
            this.sessionService.currentUser.id = response['id'];          
        } 
        else 
        {
        
        }
    });

    return false;
  }

  validateLogin(credentials) : boolean
  {     

    const headers = new HttpHeaders (credentials);
    const requestHeader = {                                                                                                                                                                                 
      headers: headers, 
    };
    
    var url = "//" + this.sessionService.serverName + ":" + this.sessionService.portNumber + "/login";

    this.http.get(url, requestHeader).subscribe(response => {
        if (response['email']) {
            this.sessionService.authenticated = true;
            this.sessionService.currentUser.email = response['email'];
            this.sessionService.currentUser.name = response['name'];
            this.sessionService.currentUser.id = response['id'];
        } else {
            this.sessionService.authenticated = false;
        }
    });

    return false;
  }

  constructor(private http: HttpClient, private sessionService: SessionService) { }
}