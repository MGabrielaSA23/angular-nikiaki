import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/models/receita.model';
import { ReceitaService } from 'src/app/services/receita.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  
  receita?: Receita[];
  currentReceita: Receita = {};
  currentIndex = -1;
  nome = '';

  constructor(private usuarioService: UsuarioService, private receitaService: ReceitaService) { }

  ngOnInit(): void {
    this.retrieveReceita();
    this.usuarioService.getUserBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }

  retrieveReceita(): void {
    this.receitaService.getAll()
      .subscribe({
        next: (data) => {
          this.receita = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveReceita();
    this.currentReceita = {};
    this.currentIndex = -1;
  }

  setActiveReceita(receita: Receita, index: number): void {
    this.currentReceita = receita;
    this.currentIndex = index;
  }
}
