import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  credentials = {email: '', password: '', username: ''};
  registrationAttemptRefused = false;

  error_msg = "email address is already in use"

  constructor(private authenticationService: AuthenticationService) {}

  onRegistrationClicked() 
  {
    this.authenticationService.validateRegistration(this.credentials);
  }

  ngOnInit() {}

}
