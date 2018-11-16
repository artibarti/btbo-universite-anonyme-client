import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // https://github.com/cornflourblue/angular-7-registration-login-example-cli/blob/master/src/app/login/login.component.ts

  hashPasswd(password: String) : String
  {
    // TODO: Zeno
    return password;
  }

  validateUserLogin(name: string, password: string)
  {
    var user = 
    [
      {
        "name" : name,
        "password" : password
      }
    ];
    return this.http.post<any>('//localhost:8080/users', user)
    .pipe(map(user => 
      {
        return user;
      }));
    
  }

  constructor(private http: HttpClient) { }
}