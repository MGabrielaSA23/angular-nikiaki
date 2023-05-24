import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
content?: string;

constructor(private usuarioService: UsuarioService) { }

ngOnInit(): void {
  this.usuarioService['getUserBoard']().subscribe({
    next: (data: string | undefined) => {
      this.content = data;
    },
    error: (err: { error: string; }) => {
      this.content = JSON.parse(err.error).message;
    }
  });
}
}
