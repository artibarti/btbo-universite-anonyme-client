import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {SessionService} from '../../../../shared/services/session/session.service'
import {Route, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //https://github.com/cornflourblue/angular-7-registration-login-example-cli/blob/master/src/app/login/login.component.ts

  hashPasswd(password: String): String {
    return password;
  }

  validateRegistration(credentials) {
    const headers = new HttpHeaders(credentials);
    const requestHeader = {
      headers: headers,
    };

    var url = this.sessionService.serverName + ":" + this.sessionService.portNumber + "/register";

    this.http.get(url, requestHeader).subscribe(response => {
      if (response['email']) 
      {
        console.log("registration success");        
      } else 
      {
        console.log("registration failed");
      }
    },
      error => {
        console.log(error)
      },
      () => {
        this.router.navigate(['login'])
      });
  }


  validateLogin(credentials) {

    /*
    const headers = new HttpHeaders(credentials);
    const requestHeader = {
      headers: headers,
    };

    var url = this.sessionService.serverName + ":" + this.sessionService.portNumber + "/login";

    this.http.get(url, requestHeader).subscribe(response => {
      if (response['email']) {
        this.sessionService.authenticated = true;
        this.sessionService.currentUser.email = response['email'];
        this.sessionService.currentUser.name = response['name'];
        this.sessionService.currentUser.id = response['id'];
      } else {
        this.sessionService.authenticated = false;
      }
    },
      error => {
        console.log(error)
      },
      () => {
        this.router.navigate(['home'])
      });
    */

    this.sessionService.authenticated = true;
    this.router.navigate(['home']);
  }

  constructor(private http: HttpClient, private sessionService: SessionService, private router:Router) {
  }
}
