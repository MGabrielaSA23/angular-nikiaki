import { Component, Input, OnInit } from '@angular/core';


import {Usuario} from "../../../models/usuario.model";
import {UsuarioService} from "../../../services/usuario.service";

import {ActivatedRoute, Router} from "@angular/router";
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {


  usuario?: Usuario[];
  currentUsuario: Usuario = {};
  currentIndex = -1;
  nome = '';

  message = '';

  constructor(private UsuarioService: UsuarioService,
    private router: Router,
    private token: TokenStorageService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.currentUsuario = this.token.getUsuario();
    
    this.getUsuario(this.currentUsuario.id);

    //this.getUsuario(this.route.snapshot.params['id']);
  }
  @Input() viewMode = false;

  getUsuario(id: any): void {
    console.log('dentro do get, id:' , id)
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
