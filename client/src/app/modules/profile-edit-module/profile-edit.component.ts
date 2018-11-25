import { Component } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service'

@Component({
  selector: 'profile-edit-root',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent 
{
  constructor(private sessionService: SessionService) {}
}
