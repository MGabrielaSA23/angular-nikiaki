import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit{

  @Input() viewMode = false;
  @Input() cancelTxt = 'cancelar';
  @Input() onTxt = 'sim';

  @Input() currentCategoria: Categoria = {
      nome: ''
  };
  message = '';

  constructor(private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    //private modalService: BsModalService,
    private router: Router) { }


    ngOnInit(): void {
      if (!this.viewMode) {
        this.message = '';
        this.getCategoria(this.route.snapshot.params["id"]);
      }
    }

  getCategoria(id: string): void {
    this.categoriaService.get(id)
      .subscribe({
        next: (data) => {
          this.currentCategoria = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCategoria(): void {
    this.message = '';

    this.categoriaService.update(this.currentCategoria.id, this.currentCategoria)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'Categoria alterada com sucesso!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteCategoria(): void {
    this.categoriaService.delete(this.categoriaService['id'])
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/lista-categoria']);
        },
        error: (e) => console.error(e)
      });
  }
}
