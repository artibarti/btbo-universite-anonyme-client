import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../shared/services/session/session.service';
import { User } from '../../../../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user: User = new User;

  registrationAttemptRefused = false;
  error_msg = 'Something is wrong with your registration attempt';

  constructor(private sessionService: SessionService, private router: Router) {}

  onRegistrationClicked() {
    if (this.preValidateRagistration()) {
      this.sessionService.validateRegistration(this.user).then(res => {
        if (res === true) {
          this.router.navigate(['/login']);
        } else {
          this.registrationAttemptRefused = true;
        }
      });
    }
  }

  preValidateRagistration(): boolean {
    if (this.user.email !== '' && this.user.firstName !== ''
      && this.user.lastName !== '' && this.user.password !== ''
      && this.user.userName !== '') {
        return true;
      }

    this.registrationAttemptRefused = true;
    return false;
  }

  ngOnInit() {
    this.registrationAttemptRefused = false;
    this.user = new User;
  }

}
