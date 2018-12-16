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
  error_msg = 'Something is wrong with you login attempt';

  constructor(
    private sessionService: SessionService,
    private router: Router) {}

  ngOnInit() {
    this.loginAttemptRefused = false;
    this.user = new User;

    this.sessionService.amILoggedIn().then(
      res => {
        if (res) {
          this.router.navigate(['/home']);
        }
      }
    );
  }

  onLoginClicked() {
    if (this.preValidateLogin()) {
      console.log('login clicked()');
      this.sessionService.validateLogin(this.user).then(
        res => {

            if (res['token']) {
              this.sessionService.authenticated = true;
              this.sessionService.currentUser.email = res['email'];
              this.sessionService.currentUser.firstName = res['firstName'];
              this.sessionService.currentUser.lastName = res['lastName'];
              this.sessionService.token = res['token'];
              this.router.navigate(['home']);
            } else {
              this.sessionService.authenticated = false;
              this.loginAttemptRefused = true;
            }
      });
    }
  }

  preValidateLogin(): boolean {
    if (this.user.userName !== '' && this.user.password !== '') {
      return true;
    }
    this.loginAttemptRefused = true;
    return false;
  }

}
