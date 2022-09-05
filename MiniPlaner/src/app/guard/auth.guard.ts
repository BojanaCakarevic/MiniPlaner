import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  
  isLoggedIn(): boolean{
    return localStorage.getItem("token") !== null;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.isLoggedIn()) {
          return true;
      }
      this.router.navigate(['login']);
      return false;
  }
  
}