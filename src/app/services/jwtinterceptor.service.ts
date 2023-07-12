import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import { Observable } from 'rxjs';

//igual ao antigo

@Injectable({
  providedIn: 'root'
})
export class JwtinterceptorService implements HttpInterceptor{

  constructor(
    private authService: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const LOGGED_USER = this.authService.login('','');

    if (LOGGED_USER) {
      const authRequest = req.clone(
        {setHeaders: {'Authorization' : 'Bearer '+ LOGGED_USER}}
      );
      console.log(LOGGED_USER)
      return next.handle(authRequest);
    }
    else {
      return next.handle(req);
    }
  }
}