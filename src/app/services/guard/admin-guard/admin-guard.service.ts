import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(
    private router :Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    const token=localStorage.getItem('token');  

    if(!token){
      this.router.navigate(['login']);
      return false;
    }
    if(token){
      const helper=new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if( decodedToken.authorities[0].authority !== 'ROLE_ADMIN' ){
        this.router.navigate(['accessdenied']);
        return false;

      }
      return true;
   
   
  }
  return false;
}
}
