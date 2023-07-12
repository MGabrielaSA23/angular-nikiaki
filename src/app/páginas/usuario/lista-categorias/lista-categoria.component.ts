import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent {

  categoria?: Categoria[];
  currentCategoria: Categoria = {};
  currentIndex = -1;
  nome = '';

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.retrieveCategoria();
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

  refreshList(): void {
    this.retrieveCategoria();
    this.currentCategoria = {};
    this.currentIndex = -1;
  }

  setActiveCategoria(categoria: Categoria, index: number): void {
    this.currentCategoria = categoria;
    this.currentIndex = index;
  }
}
