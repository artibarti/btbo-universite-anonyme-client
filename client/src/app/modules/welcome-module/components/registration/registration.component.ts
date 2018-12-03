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
  error_msg = "All fields are required!"

  constructor(private sessionService: SessionService) {}

  onRegistrationClicked() 
  {
    if (this.preValidateRagistration())
    {
      this.sessionService.validateRegistration(this.user);
    }
  }

  preValidateRagistration() : boolean
  {
    if (this.user.email != "" && this.user.firstName != ""
      && this.user.lastName != "" && this.user.password != ""
      && this.user.userName != "") 
      {
        return true;
      }
    
    this.registrationAttemptRefused = true;
    return false;
  }

  ngOnInit() 
  {
    this.registrationAttemptRefused = false;
    this.user = new User;
  }

}
