import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { log } from 'util';
import { Router } from '@angular/router'
import { SessionService } from '../services/session/session.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  
  constructor(private sessionService: SessionService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    console.log("canActivate called");
    return this.sessionService.authenticated;
  }

  canLoad() : boolean
  {
    console.log("canLoad called");
    return this.sessionService.authenticated;
  }
}
