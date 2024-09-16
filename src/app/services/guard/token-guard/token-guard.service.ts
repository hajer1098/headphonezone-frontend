import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenGuardService implements CanActivate {

  constructor(private router: Router) { 

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   

    const token=localStorage.getItem('token');  

    if(!token){
      this.router.navigate(['login']);
      return false;
    }

    const jwtHelper =new JwtHelperService();
    const isTokenValid=jwtHelper.isTokenExpired(token);

    if(isTokenValid){
      localStorage.clear();
      this.router.navigate(['login']);
      return false;

    }


     return true;
  }
}
