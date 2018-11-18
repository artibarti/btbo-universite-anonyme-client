import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title = 'ua >';
  
  onLoginClicked()
  {
    this.sessionService.showLoginForm = true;
    this.sessionService.showRegistrationForm = false;
  }

  onSignUpClicked()
  {
    this.sessionService.showLoginForm = false;
    this.sessionService.showRegistrationForm = true;    
  }

  onLogoutClicked()
  {
    this.sessionService.authenticated = false;
    this.sessionService.showLoginForm = true;
    this.sessionService.showRegistrationForm = false;    
  }

  constructor(private sessionService: SessionService) 
  {
    
  }

  ngOnInit() 
  {
  
  }

}
