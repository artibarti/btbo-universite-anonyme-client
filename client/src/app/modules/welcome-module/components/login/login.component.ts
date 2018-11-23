import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from '../../services/authentication/authentication.service'
import { SessionService } from '../../../../shared/services/session/session.service';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {email: '', password: ''};
  loginAttemptRefused = false;
  error_msg = "email or password is incorrect"

  constructor(
    private authenticationService: AuthenticationService, 
    private sessionService: SessionService,
    private router: Router) {}

  ngOnInit() {}
 
  onRegisterClicked()
  {
    this.sessionService.showLoginForm = false;
    this.sessionService.showRegistrationForm = true;    
  }

  onLoginClicked() 
  {
    this.loginAttemptRefused = false;
    if (!this.authenticationService.validateLogin(this.credentials))
    {
      this.loginAttemptRefused = false;
      this.router.navigate(['home'])
    }
  }

}

