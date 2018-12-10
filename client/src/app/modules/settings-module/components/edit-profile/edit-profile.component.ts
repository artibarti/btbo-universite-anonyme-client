import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { SessionService } from '../../../../shared/services/session/session.service';
import { UserService } from '../../../../shared/services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user: User;
  errorMsg: string = "Something is wrong";
  showError: boolean = false;

  constructor(private userService: UserService, private sessionSevice: SessionService,
      private router: Router) 
  {
    this.user = new User;
    this.user.email = this.sessionSevice.currentUser.email;            
    this.user.firstName = this.sessionSevice.currentUser.firstName;            
    this.user.lastName = this.sessionSevice.currentUser.lastName;
  }

  onUpdateClicked()
  {    
    this.userService.updateProfile(this.user).then(
      res => {
        if (res != null)
        {
          this.router.navigate(['/home']);
          this.sessionSevice.currentUser.firstName = res['firstName'];
          this.sessionSevice.currentUser.lastName = res['lastName'];
          this.sessionSevice.currentUser.email = res['email'];
        }
        else
        {
          this.showError = true;
        }
      });
  }

  ngOnInit() 
  {
      this.user.email = this.sessionSevice.currentUser.email;            
      this.user.firstName = this.sessionSevice.currentUser.firstName;            
      this.user.lastName = this.sessionSevice.currentUser.lastName;
  }

}
