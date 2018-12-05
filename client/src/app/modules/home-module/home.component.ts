import { Component } from '@angular/core';
import { SessionService } from '../../shared/services/session/session.service'
import { Router } from '@angular/router';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent 
{
  constructor(private sessionService: SessionService, private router: Router) {}
}
