import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  passwords = {old: '', new1: '', new2: ''};
  startedToEdit = false;

  constructor(private settingsService: SettingsService) { }

  onUpdateClicked()
  {
    this.startedToEdit = true;
    // this.settingsService.updatePassword(this.passwords);
  }

  ngOnInit() 
  {
    this.passwords.old = '';
    this.passwords.new1 = '';
    this.passwords.new2 = '';    
  }

}
