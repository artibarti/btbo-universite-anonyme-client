import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title = 'universite anonyme';
  
  onLogoutClicked()
  {
    this.sessionService.authenticated = false;
  }

  constructor(private sessionService: SessionService) 
  {
    
  }

  ngOnInit() 
  {
  
  }

}
