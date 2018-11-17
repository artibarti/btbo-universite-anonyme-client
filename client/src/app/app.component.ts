import { Component } from '@angular/core';
import { SessionService } from './services/session/session.service'
import { LoginComponent } from './components/login/login.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  constructor(private sessionService: SessionService) {}
}
