import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { SessionService } from '../../shared/services/session/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private sessionService: SessionService, private router: Router) {}

  canLoad(route: Route): boolean 
  {
    if (this.sessionService.authenticated) 
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login'])
      return false;
    }
    return ;
  }
}