import { Injectable } from '@angular/core';
import { User } from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public currentUser: User;
  authenticated = false;
  
  serverName = "http://192.168.1.2";
  portNumber = "8081";

  showLoginForm = true;
  showRegistrationForm = false;

  constructor() 
  {    
    this.currentUser = new User();
  }
  
}
