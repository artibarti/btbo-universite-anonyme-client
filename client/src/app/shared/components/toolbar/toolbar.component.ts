import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session/session.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title = 'ua >';
  
  onLogoutClicked()
  {
    this.sessionService.authenticated = false;
    this.router.navigate(['/login'])
  }

  constructor(private sessionService: SessionService, private router: Router) 
  {
    
  }

  ngOnInit() 
  {
  
  }

}
