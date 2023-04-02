import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

type returnType = boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): returnType {
    return true;
  }
}
