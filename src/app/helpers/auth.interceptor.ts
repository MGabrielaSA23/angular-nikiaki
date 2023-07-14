/*import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../services/token-storage.service';
import { Observable } from 'rxjs';

//igual ao antigo

const HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('dentro do interceptor')
    let authReq = req;
    const loggedUser = this.token.getUsuario();
    //const token = this.loggedUser.token();

    console.log('dentro do authinterceptor:', loggedUser)

    if (loggedUser) {
      authReq = req.clone({ headers: req.headers.set(HEADER_KEY, 'Bearer ' + loggedUser.token) });
      console.log(loggedUser)
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

*/