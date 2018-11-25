import { Component, OnInit, Input } from '@angular/core';
import { SessionService } from '../../../../shared/services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};
  loginAttemptRefused = false;
  error_msg = "email or password is incorrect"

  constructor(
    private sessionService: SessionService,
    private router: Router) {}

  ngOnInit() {}

  onLoginClicked() 
  {
    this.sessionService.validateLogin(this.credentials);
  }

}