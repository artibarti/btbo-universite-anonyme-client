import { Injectable } from '@angular/core';
import { User } from '../../models/user'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public currentUser: User;
  authenticated = false;  
  serverName = "//localhost";
  portNumber = "8080";
  apiURL = this.serverName + ":" + this.portNumber;

  hashPasswd(password: string): string 
  {
    var salt = "d84b7eb1";
    var hash = CryptoJS.SHA256(password + salt);
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    return hashInBase64 + '#' + salt;
  }

  validateRegistration(user: User) {
    
    var userDTO: User = user;
    const headers = new HttpHeaders(JSON.stringify(userDTO));
    const requestHeader = {
      headers: headers,
    };

    var url = this.apiURL + "/register";

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


  validateLogin(user: User) {

    var userDTO = {
      userName: user.userName,
      password: user.password
    };

    const headers = new HttpHeaders(userDTO);
    const requestHeader = {
      headers: headers,
    };

    var url = this.apiURL + "/login";

    this.http.get(url, requestHeader).subscribe(response => {
      if (response['id']) {
        this.authenticated = true;
        this.currentUser.email = response['email'];
        this.currentUser.firstName = response['firstName'];
        this.currentUser.lastName = response['lastName'];
        this.currentUser.id = response['id'];
        this.currentUser.token = response['token'];
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
    
    this.authenticated = true;
    this.currentUser.email = "testemail@test.com";
    this.currentUser.firstName = "testfirstname";
    this.currentUser.lastName = "testlastname";
    this.currentUser.userName = "kurwa124";
    this.currentUser.id = "1";
    this.router.navigate(['home']);
  }

  logout()
  {
    this.currentUser = new User;
    this.authenticated = false;
    this.router.navigate(['/login']);
  }

  constructor(private http: HttpClient, private router: Router) 
  {
    this.currentUser = new User();
  }

}
