import { Injectable } from '@angular/core';

const TOKEN_KEY = 'token';
const USER_KEY = 'auth-user';


//Tá igual ao antigo

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  isLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    console.log('dentro do SAVETOKEN')
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    console.log('dentro do gettoken')
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsuario(usuario: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(usuario));
  }

  public getUsuario(): any {
    const usuario = window.sessionStorage.getItem(USER_KEY);
    if (usuario) {
      console.log('usuario' , usuario)
      return JSON.parse(usuario);
    }

    return {};
  }
}