import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  serverName = '//84.1.185.175';
  public currentUser: User;
  authenticated = false;
  portNumber = '8081';
  anonym = false;
  token = '';
  apiURL = this.serverName + ':' + this.portNumber;

  generateSalt() {
    return 'd84b7eb1';
  }

  /*
  getMySaltFromServer(username: string)
  {
    const url = '/users/' + username + '/getsalt';
    return this.http.get(url).toPromise();
  }
  */

  hashPasswd(password: string, salt: string): string {

    const hash = CryptoJS.SHA256(password + salt);
    const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
    console.log('hashedPassword = ' + hashInBase64 + '#' + salt);
    return hashInBase64 + '#' + salt;
  }

  validateRegistration(user: User) {
    const url = this.apiURL + '/register';
    const salt = this.generateSalt();

    return this.http.get<boolean>(url, { headers : {'userName': user.userName, 'email': user.email, 'firstName' : user.firstName,
      'lastName' : user.lastName, 'password' : this.hashPasswd(user.password, salt) }}).toPromise();

    }

  validateLogin(user: User) {
    const url = this.apiURL + '/login';
    let salt = '';
    let hashedPwd = '';

    salt = this.generateSalt();
    hashedPwd = this.hashPasswd(user.password, salt);

    return this.http.get(url, { headers : {'userName' : user.userName, 'password' : hashedPwd}}).toPromise();
  }

  logout() {
    const url = this.apiURL + '/logout';

    this.http.delete(url, {headers : {'token' : this.token}}).subscribe(
      res => {
        this.currentUser = new User;
        this.authenticated = false;
        this.token = '';
        this.router.navigate(['/login']);
      }
    );
  }

  amILoggedIn() {
    const url = this.apiURL + '/amILoggedIn';

    return this.http.get<boolean>(url, {headers : {'token' : this.token}}).toPromise();
  }

  constructor(private http: HttpClient, private router: Router) {
    this.currentUser = new User();
  }

}
