import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

type returnType = boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): returnType {
    return true;
  }

  //TODO: Refactoring
  /*
  if (Number(this.authService.getId()) > 0) {
    return true
  }
  console.log("not valid");
  this.router.navigate(["/login"])
  */
}
