import { Component } from '@angular/core';


import {Receita} from "../../../models/receita.model";
import {ReceitaService} from "../../../services/receita.service";
import { Usuario } from 'src/app/models/usuario.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-lista-receita',
  templateUrl: './lista-receita.component.html',
  styleUrls: ['./lista-receita.component.css']
})
export class ListaReceitaComponent {

  recipeId?: number;
  hasLiked?: boolean = false;

  receita?: Receita[];
  currentReceita: Receita = {};
  currentUsuario: Usuario = {};

  likeStatus: boolean = false;
  currentIndex = -1;
  nome = '';

  constructor(
    private receitaService: ReceitaService,
    private token: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.recipeId = 1;
    this.retrieveReceita();
    this.currentUsuario = this.token.getUsuario();
    console.log(this.currentUsuario)

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
    this.checkIfLiked();
  }

  likeRecipe() {
    console.log(this.currentReceita.id)
    this.receitaService.likeRecipe(this.currentReceita.id, this.currentUsuario.id).subscribe(() => {
      this.checkIfLiked();
    });
  }
  checkIfLiked(){
    if(this.currentUsuario.id){
      this.receitaService.checkIfRecipeLiked(this.currentReceita.id, this.currentUsuario.id)
      .subscribe(likeStatus => {
        if (likeStatus) {
          console.log('Recipe is liked.');
          this.hasLiked = likeStatus;
        } 
      });
      this.hasLiked = false;
    }
  }

  dislikeRecipe() {
    this.receitaService.dislikeRecipe(this.currentReceita.id, this.currentUsuario.id).subscribe(() => {
      this.checkIfLiked();
    });
  }
  checkLikeStatus(receita: Receita) {
    console.log(receita.liked)
    return receita.liked? true : false
  }

  isObjectEmpty(obj: any): boolean {
    return Object.keys(obj).length === 0;
  }
  /*toggleLikeStatus(id:number) {
    if (this.checkLikeStatus()) {
      this.dislikeRecipe();
    } else {
      this.likeRecipe();
    }
  }*/
}
