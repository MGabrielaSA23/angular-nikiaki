import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.component.html',
  styleUrls: ['./registrar-categoria.component.css']
})
export class RegistrarCategoriaComponent {
  
  categoria: Categoria = {
    nome: ''
  };
  submitted = false;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  saveCategoria(): void {
    const data = {
      nome: this.categoria.nome
    };

    this.categoriaService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newCategoria(): void {
    this.submitted = false;
    this.categoria = {
      nome: ''
    };
  }
}
