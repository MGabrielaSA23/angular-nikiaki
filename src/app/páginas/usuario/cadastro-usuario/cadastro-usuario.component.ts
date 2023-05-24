import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {

  usuario: Usuario = {
    nome: '',
    senha: '',
    email:'',
  };
  submitted = false;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  saveUsuario(): void {
    const data = {
      nome: this.usuario.nome,
      senha: this.usuario.senha,
      email: this.usuario.email,
    };

    this.usuarioService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newUsuario(): void {
    this.submitted = false;
    this.usuario = {
      nome: '',
      senha: '',
      email:'',
    };
  }
}
