import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {

  @Input() viewMode = false;

  @Input() currentUsuario: Usuario = {
      nome: '',
      email: '',
      senha: ''
  };

  message = '';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUsuario(this.route.snapshot.params["id"]);
    }
  }

  getUsuario(id: string): void {
    this.usuarioService.get(id)
      .subscribe({
        next: (data) => {
          this.currentUsuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateUsuario(): void {
    this.message = '';

    this.usuarioService.update(this.currentUsuario.id, this.currentUsuario)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Usuário alterado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteUsuario(): void {
    this.usuarioService.delete(this.currentUsuario.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        error: (e) => console.error(e)
      });
  }
}
