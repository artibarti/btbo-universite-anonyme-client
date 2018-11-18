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

  credentials = {username: '', password: ''};
  loading = false;
  loginAttemptRefused = false;

  constructor(
    private authenticationService: AuthenticationService, 
    private router: Router) {}

  ngOnInit() {}
 
  onLoginClicked() 
  {
    this.loginAttemptRefused = false;

    if (!this.authenticationService.validateUserLogin(this.credentials))
    {
      this.loginAttemptRefused = true;
    }
  }

}

