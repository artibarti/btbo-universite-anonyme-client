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
  serverName = "//localhost";
  portNumber = "8080";
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

    return this.http.get(url, { headers : {'userName': user.userName, 'email': user.email, 'firstName' : user.firstName, 
      'lastName' : user.lastName, 'password' : this.hashPasswd(user.password, salt) }}).toPromise();

    }

  validateLogin(user: User) {
   
    var url = this.apiURL + "/login";
    let salt: string = "";
    let hashedPwd: string = "";

    salt = this.generateSalt();
    console.log("salt = " + salt);
    hashedPwd = this.hashPasswd(user.password, salt);

    return this.http.get(url, { headers : {'userName' : user.userName, 'password' : hashedPwd}}).toPromise();  
  }

  logout()
  {
    console.log("token -> " + this.token);

    var url = this.apiURL + "/logout";
    
    this.http.delete(url, {headers : {"token" : this.token}}).subscribe(
      res => {
        
        console.log("resolving logout answer");

        this.currentUser = new User;
        this.authenticated = false;
        this.token = "";
        this.router.navigate(['/login']);
      }
    );
  }

  constructor(private http: HttpClient, private router: Router) 
  {
    this.currentUser = new User();
  }

}
