import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, NavigationExtras, CanLoad, Route } from '@angular/router';
import { SessionService } from '../../shared/services/session/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private sessionService: SessionService, private router: Router) {}

  canLoad(route: Route): boolean 
  {
    if (this.sessionService.authenticated) 
    {
      console.log("authenticated");      
      return true;
    }
    else
    {
      console.log("nope authenticated");      
      this.router.navigate(['/login'])
      return false;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
    if (this.sessionService.authenticated) 
    {
      console.log("authenticated");      
      return true;
    }
    else
    {
      console.log("nope authenticated");      
      this.router.navigate(['/login'])
      return false;
    }
  }
  
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
    if (this.sessionService.authenticated) 
    {
      console.log("authenticated");      
      return true;
    }
    else
    {
      console.log("nope authenticated");      
      this.router.navigate(['/login'])
      return false;
    }
  }
}