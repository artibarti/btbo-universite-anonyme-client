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

  validateUserLogin(credentials)
  {

    const headers = new HttpHeaders (credentials);
    const requestOptions = {                                                                                                                                                                                 
      headers: headers, 
    };
    
    this.http.get<any>("//localhost:8080/login", requestOptions).subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
    });
  }

  constructor(private http: HttpClient) { }
}
