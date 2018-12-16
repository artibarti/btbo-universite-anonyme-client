import { Component } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-root',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private sessionService: SessionService, private router: Router) {
    this.router.navigate(['/settings/profile']);
  }
}
