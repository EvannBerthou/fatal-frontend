import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let localHeaders = req.headers
    if (!req.headers.get('Content-Type') && !req.url.includes("upload")) {
      localHeaders = localHeaders.set('Content-Type', 'application/json')
    }
    req = req.clone({
      headers: localHeaders
        .set('Authorization', sessionStorage.getItem('token') || '')
    })
    req = req.clone({
      withCredentials: true
    });
    return next.handle(req);
  }
}
