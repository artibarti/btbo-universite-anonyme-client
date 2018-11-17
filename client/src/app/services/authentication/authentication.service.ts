import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //https://github.com/cornflourblue/angular-7-registration-login-example-cli/blob/master/src/app/login/login.component.ts

  authenticated = false;

  hashPasswd(password: String) : String
  {
    return password;
  }

  validateUserLogin(credentials, callback)
  {

    const headers = new HttpHeaders (credentials ? { authorization : 'Basic ' 
        + btoa(credentials.name + ':' + credentials.password) } : {});

    this.http.get("//localhost:8080/login", {headers: headers}).subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });
  }

  constructor(private http: HttpClient) { }
}