import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean 
  {
    console.log("canActivate called");
    return false;
  }
}
