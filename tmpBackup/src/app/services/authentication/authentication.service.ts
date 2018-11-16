import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // https://github.com/cornflourblue/angular-7-registration-login-example-cli/blob/master/src/app/login/login.component.ts

  hashPasswd(passwd: String) : String
  {
    // TODO: Zeno
    return passwd;
  }

  validateUserLogin(name: string, passwd: string)
  {
    this.http.post<any>('//localhost:8080/login', { name, hashPasswd(passwd) });
    /*
    return this.http.post<any>('//localhost:8080/login', { name, hashPasswd(passwd) })
      .pipe(map(user => 
      {
        return user;
      }));
    */
  }

  constructor(private http: HttpClient) { }
}