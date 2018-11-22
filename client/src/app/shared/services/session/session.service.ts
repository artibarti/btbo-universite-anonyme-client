import { Injectable } from '@angular/core';
import { User } from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public currentUser: User;
  authenticated = false;
  
  serverName = "localhost";
  portNumber = "8080";

  showLoginForm = true;
  showRegistrationForm = false;

  constructor() 
  {    
    this.currentUser = new User();
  }
  
}
