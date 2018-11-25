import { Injectable } from '@angular/core';
import { User } from '../../models/user'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import { sha256 } from 'js-sha256';
// import { log } from 'util';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public currentUser: User;
  authenticated = false;  
  serverName = "//localhost";
  portNumber = "8080";

  hashPasswd(password: string): string 
  {
    var hash = CryptoJS.SHA256(password + "d84b7eb1");
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    return hashInBase64;
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

    console.log(this.hashPasswd("alma1234"));
    this.authenticated = true;
    this.router.navigate(['home']);
  }

  constructor(private http: HttpClient, private sessionService: SessionService, private router: Router) 
  {
    this.currentUser = new User();
  }


}
