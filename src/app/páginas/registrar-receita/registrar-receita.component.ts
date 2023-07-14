import { Component,Input } from '@angular/core';


import {Receita} from "../../models/receita.model";
import {ReceitaService} from "../../services/receita.service";
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-registrar-receita',
  templateUrl: './registrar-receita.component.html',
  styleUrls: ['./registrar-receita.component.css']
})
export class RegistrarReceitaComponent {

  receita: Receita = {
    nome: '',
    categoria: '',
    ingredientes: '',
    porcoes:'',
    tempodepreparo:'',
    mododepreparo: '',
    observacao: '',
  };

  categoria?: Categoria[];

  submitted = false;

  constructor(private receitaService: ReceitaService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {

    this.retrieveCategoria();
  }

  saveReceita(): void {
    const data = {
      nome: this.receita.nome,
      categoria: this.receita.categoria,
      ingredientes: this.receita.ingredientes,
      porcoes: this.receita.porcoes,
      tempodepreparo: this.receita.tempodepreparo,
      mododepreparo: this.receita.mododepreparo,
      observacao: this.receita.observacao,
    };

    this.receitaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newReceita(): void {
    this.submitted = false;
    this.receita = {
      nome: '',
      categoria: '',
      ingredientes: '',
      porcoes:'',
      tempodepreparo:'',
      mododepreparo:'',
      observacao: ''
    };
  }

  retrieveCategoria(): void {
    this.categoriaService.getAll()
      .subscribe({
        next: (data) => {
          this.categoria = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
}
