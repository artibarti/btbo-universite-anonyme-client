import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../../shared/services/session/session.service';
import { UserService } from '../../../../shared/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private sessionService: SessionService, private userService: UserService) { }

  points: string;

  ngOnInit() {
    this.userService.getUserRating().then(
      res => {
        this.points = res;
      }
    );
  }
}
