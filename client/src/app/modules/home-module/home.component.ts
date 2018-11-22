import { Component } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service'

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent 
{
  constructor(private sessionService: SessionService) {}
}
