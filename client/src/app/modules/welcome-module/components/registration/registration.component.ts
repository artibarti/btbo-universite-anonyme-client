import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../shared/services/session/session.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  credentials = 
  {
    email: '', 
    password: '', 
    username: '',
    firstname: '',
    lastname: ''
  };
  
  registrationAttemptRefused = false;

  error_msg = "email address is already in use"

  constructor(private sessionService: SessionService) {}

  onRegistrationClicked() 
  {
    this.sessionService.validateRegistration(this.credentials);
  }

  ngOnInit() {}

}
