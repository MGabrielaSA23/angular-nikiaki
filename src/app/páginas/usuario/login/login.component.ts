import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    senha: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.form = this.tokenStorage.getUser();
    }
  }

  onSubmit(): void {
    const { username, senha } = this.form;

    this.authService.login(username, senha).subscribe({
      next: (data: { acessToken: any; }) => {
        this.tokenStorage.saveToken(data.acessToken);
        this.tokenStorage.saveUser(data);

        console.log(data)

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.form = this.tokenStorage.getUser();
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
