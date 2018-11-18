import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service'
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {email: '', password: ''};
  loginAttemptRefused = false;

  error_msg = "email or password is incorrect"

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {}
 
  onLoginClicked() 
  {
    this.loginAttemptRefused = false;

    if (!this.authenticationService.validateLogin(this.credentials))
    {
      this.loginAttemptRefused = true;
    }
  }

}

