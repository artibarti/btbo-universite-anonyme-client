import { Injectable } from '@angular/core';
import { User } from '../../models/user'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public currentUser: User;
  authenticated = false;  
  serverName = "//localhost";
  portNumber = "8080";
  
  hashPasswd(password: String): String {
    return password;
  }

  validateRegistration(credentials) {
    const headers = new HttpHeaders(credentials);
    const requestHeader = {
      headers: headers,
    };

    var url = this.serverName + ":" + this.portNumber + "/register";

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

    var url = this.serverName + ":" + this.portNumber + "/login";

    this.http.get(url, requestHeader).subscribe(response => {
      if (response['email']) {
        this.authenticated = true;
        this.currentUser.email = response['email'];
        this.currentUser.name = response['name'];
        this.currentUser.id = response['id'];
      } else {
        this.authenticated = false;
      }
    },
      error => {
        console.log(error)
      },
      () => {
        this.router.navigate(['home'])
      });
    */

    this.authenticated = true;
    this.router.navigate(['home']);
  }

  constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) 
  {
    this.currentUser = new User();
  }


}
