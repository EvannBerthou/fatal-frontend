import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.startsWith('http')) {
      req = req.clone({ url: `${environment.apiUrl}${req.url}` })
    }

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
