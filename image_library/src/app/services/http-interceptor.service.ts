import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as _env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method
    if (!req.headers.has('Content-Type')) {
      req = req.clone({
        setHeaders: { "Authorization": `Client-ID ${_env.access_key}` } 
      });
    }
    return next.handle(req);
  }
}
