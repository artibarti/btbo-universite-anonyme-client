import { Component } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service'

@Component({
  selector: 'app-welcome-root',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent
{
  constructor(private sessionService: SessionService) {}
}
