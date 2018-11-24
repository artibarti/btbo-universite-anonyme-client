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
    if (!this.sessionService.authenticated)
    {
      console.log("canActivate called -> access denied")
      this.router.navigate(['login'])
      return false;
    }
    else
    {
      console.log("canActivate called -> access granted")
      return true;
    }
  }

  canLoad() : boolean
  {
    if (!this.sessionService.authenticated)
    {
      console.log("canLoad called -> access denied")
      this.router.navigate(['login'])
      return false;
    }
    else
    {
      console.log("canLoad called -> access granted")
      return true;
    }
  }
}
