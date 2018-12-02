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
  error_msg = "email or password is incorrect"

  constructor(
    private sessionService: SessionService,
    private router: Router) {}

  ngOnInit() {}

  onLoginClicked() 
  {
    this.sessionService.validateLogin(this.user);
  }

}