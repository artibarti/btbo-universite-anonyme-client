import { Injectable } from '@angular/core';
import { User } from '../../models/user'

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  currentUser: User;
  authenticated = false;

  showLoginForm = true;
  showRegistrationForm = false;

  constructor() {}
  
}
