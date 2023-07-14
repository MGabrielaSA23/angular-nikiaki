import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

//igual ao antigo

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any = {
    username: null,
    senha: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.usuario = this.tokenStorage.getUsuario();
    }
  }

  onSubmit(): void {
    const { username, senha } = this.usuario;
    console.log('dentro do login component', this.usuario)

    this.authService.login(username, senha).subscribe({
      next: (data) => {
        this.tokenStorage.saveToken(data.acessToken);
        this.tokenStorage.saveUsuario(data);

        this.authService.setLoggedUser(data);

        console.log('dentro do login component', data)

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.usuario = this.tokenStorage.getUsuario();
        this.reloadPage();
      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
