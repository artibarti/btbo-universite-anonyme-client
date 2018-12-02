import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../shared/services/session/session.service';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = new User;
  
  registrationAttemptRefused = false;
  error_msg = "email address is already in use"

  constructor(private sessionService: SessionService) {}

  onRegistrationClicked() 
  {
    this.sessionService.validateRegistration(this.user);
  }

  ngOnInit() {}

}
