import { Component, OnInit } from '@angular/core';
import { User } from '../../../../shared/models/user';
import { SessionService } from '../../../../shared/services/session/session.service';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  user: User;

  constructor(private settingsService: SettingsService, private sessionSevice: SessionService) 
  {
    this.user = new User;
    this.user.email = this.sessionSevice.currentUser.email;            
    this.user.firstName = this.sessionSevice.currentUser.firstName;            
    this.user.lastName = this.sessionSevice.currentUser.lastName;
  }

  onUpdateClicked()
  {    
    this.settingsService.updateProfile(this.user);
  }

  ngOnInit() 
  {
      this.user.email = this.sessionSevice.currentUser.email;            
      this.user.firstName = this.sessionSevice.currentUser.firstName;            
      this.user.lastName = this.sessionSevice.currentUser.lastName;
  }

}
