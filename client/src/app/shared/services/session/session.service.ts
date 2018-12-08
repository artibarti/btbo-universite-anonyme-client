import { Injectable } from '@angular/core';
import { User } from '../../models/user'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public currentUser: User;
  authenticated = false;  
  serverName = "//192.168.1.2";
  portNumber = "8081";
  apiURL = this.serverName + ":" + this.portNumber;

  token: string = "";
  anonym: boolean = false;

  generateSalt()
  {
    return "d84b7eb1";
  }

  getMySaltFromServer(username: string)
  {
    var url = "/users/" + username + "/getsalt";
    return this.http.get(url).toPromise();
  }

  hashPasswd(password: string, salt: string): string 
  {
    var hash = CryptoJS.SHA256(password + salt);
    var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    console.log("hashedPassword = " + hashInBase64 + '#' + salt);
    return hashInBase64 + '#' + salt;
  }

  validateRegistration(user: User) 
  {    
    var url = this.apiURL + "/register";
    var salt: string = this.generateSalt();

    this.http.get(url, { headers : {'userName': user.userName, 'email': user.email, 'firstName' : user.firstName, 
      'lastName' : user.lastName, 'password' : this.hashPasswd(user.password, salt) }}).subscribe(response => {
      if (response['firstName']) 
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
   
    var url = this.apiURL + "/login";
    let salt: string = "";
    let hashedPwd: string = "";

    salt = this.generateSalt();
    console.log("salt = " + salt);
    hashedPwd = this.hashPasswd(user.password, salt);

    this.http.get(url, { headers : {'userName' : user.userName, 'password' : hashedPwd}}).subscribe(response => {
      if (response['token']) {
        this.authenticated = true;
        this.currentUser.email = response['email'];
        this.currentUser.firstName = response['firstName'];
        this.currentUser.lastName = response['lastName'];
        this.token = response['token'];
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

    /*this.getMySaltFromServer(user.userName).then(
      res => {
      }
    );*/

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
