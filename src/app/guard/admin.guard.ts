import { AuthenticationService } from './../service/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor( private authenticationService: AuthenticationService ) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authenticationService.isAdmin();
  }
}
