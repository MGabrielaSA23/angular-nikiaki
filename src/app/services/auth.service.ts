import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';

const baseUrl = 'http://localhost:8080/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,
    private router: Router) { }
  private readonly LOGGED_USER = 'user-logged'



  login(username: string, senha: string): Observable<any> {
    return this.http.post(baseUrl + 'login', {
      username,
      senha
    }, httpOptions);
  }

  register(username: string, email: string, senha: string): Observable<any> {
    return this.http.post(baseUrl + 'cadastrar-usuario', {
      username,
      email,
      senha
    }, httpOptions);
  }
    setLoggedUser(userAccount: Usuario) : void {
      sessionStorage.setItem(this.LOGGED_USER, JSON.stringify(userAccount));
    } 
    logout(): void {
      sessionStorage.removeItem(this.LOGGED_USER);
      this.router.navigate(['/login']);
    }

    getLoggedUser(): Usuario {    
      return JSON.parse(<string> sessionStorage.getItem(this.LOGGED_USER));   
    }
}