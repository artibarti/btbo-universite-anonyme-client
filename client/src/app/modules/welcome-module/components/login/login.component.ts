import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../../../../shared/services/session/session.service';
import { Router } from '@angular/router';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User;

  loginAttemptRefused = false;
  error_msg = "Pls fill all fields";

  constructor(
    private sessionService: SessionService,
    private router: Router) {}

  ngOnInit() 
  {
    this.loginAttemptRefused = false;
    this.user = new User;
  }

  onLoginClicked() 
  {
    if (this.preValidateLogin())
    {
      this.sessionService.validateLogin(this.user);
    }
  }

  preValidateLogin() : boolean
  {
    if (this.user.userName != "" && this.user.password != "")
    {
      return true;
    }
    this.loginAttemptRefused = true;
    return false;
  }

}