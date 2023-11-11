import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api/services';

@Injectable()
export class AuthorizationJwtInterceptor implements HttpInterceptor {

  constructor(private api: ApiService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + localStorage.getItem("jwt")
        }
      });
      return next.handle(request);
    
  }
}
