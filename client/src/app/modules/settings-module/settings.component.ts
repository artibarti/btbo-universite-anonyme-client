import { Component } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service'

@Component({
  selector: 'settings-root',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent 
{
  constructor(private sessionService: SessionService) {}
}
