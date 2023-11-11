import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, catchError, map, of } from 'rxjs';
import { ApiService } from './api/services';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router, private jwtHelper: JwtHelperService, private api: ApiService) { }

  canActivate()
  {
    return this.api.apiCheckJwtGet({ token: localStorage.getItem("jwt")! })
      .pipe(
        map(() => true),
        catchError(() => { this.router.navigate(['login-page']); return of(false) })
      );
  }
  
}
