import { Component, Input } from '@angular/core';


import {Usuario} from "../../../models/usuario.model";
import {UsuarioService} from "../../../services/usuario.service";

import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  usuario?: Usuario[];
  currentUsuario: Usuario = {};
  currentIndex = -1;
  nome = '';

  message = '';

  constructor(private UsuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveUsuario();
  }
  @Input() viewMode = false;

  setActiveUsuario(Usuario: Usuario, index: number): void {
    this.currentUsuario = Usuario;
    this.currentIndex = index;
  }

  retrieveUsuario(): void {
    this.UsuarioService.getAll()
      .subscribe({
        next: (data) => {
          this.usuario = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  getUsuario(id: string): void {
    this.UsuarioService.get(id)
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

    this.UsuarioService.update(this.currentUsuario.id, this.currentUsuario)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Usuário alterado com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteUsuario(): void {
    this.UsuarioService.delete(this.currentUsuario.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/perfil']);
        },
        error: (e) => console.error(e)
      });
  }

}
