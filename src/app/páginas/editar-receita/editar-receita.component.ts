import { Component, Input, OnInit } from '@angular/core';


import {Receita} from "../../models/receita.model";
import {ReceitaService} from "../../services/receita.service";


import {ActivatedRoute, Router} from "@angular/router";
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';
//import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-editar-receita',
  templateUrl: './editar-receita.component.html',
  styleUrls: ['./editar-receita.component.css']
})
export class EditarReceitaComponent implements OnInit{

  @Input() viewMode = false;
  @Input() cancelTxt = 'cancelar';
  @Input() onTxt = 'sim';

  @Input() currentReceita: Receita = {
      nome: '',
      categoria: '',
      ingredientes: '',
      porcoes:'',
      tempodepreparo:'',
      mododepreparo:'',
      observacao:'',
  };
  categoria?: Categoria[];

  @Input() currentCategoria: Categoria = {
    nome: '',
  };
  message = '';

  constructor(
    private receitaService: ReceitaService,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getReceita(this.route.snapshot.params["id"]);
    }
    this.retrieveCategoria();


  }

  getReceita(id: string): void {
    this.receitaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentReceita = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateReceita(): void {
    this.message = '';

    this.receitaService.update(this.currentReceita.id, this.currentReceita)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Receita alterada com sucesso!';
        },
        error: (e) => console.error(e)
      });

      
  }

  deleteReceita(): void {
    this.receitaService.delete(this.currentReceita.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/lista-receita']);
        },
        error: (e) => console.error(e)
      });
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
