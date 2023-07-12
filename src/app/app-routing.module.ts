import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './páginas/usuario/cadastro-usuario/cadastro-usuario.component';
import { PerfilComponent } from './páginas/usuario/perfil/perfil.component';
import { RegistrarReceitaComponent } from './páginas/registrar-receita/registrar-receita.component';
import { EditarReceitaComponent } from './páginas/editar-receita/editar-receita.component';
import { ListaReceitaComponent } from './páginas/usuario/lista-receita/lista-receita.component';
import { LoginComponent } from './páginas/usuario/login/login.component';
import { BoardModeradorComponent } from './páginas/usuario/board-moderador/board-moderador.component';
import { BoardAdminComponent } from './páginas/usuario/board-admin/board-admin.component';
import { BoardUsuarioComponent } from './páginas/usuario/board-usuario/board-usuario.component';
import { RegistrarCategoriaComponent } from './páginas/registrar-categoria/registrar-categoria.component';
import { EditarCategoriaComponent } from './páginas/editar-categoria/editar-categoria.component';
import { EditarPerfilComponent } from './páginas/usuario/editar-perfil/editar-perfil.component';
import { ListaCategoriaComponent } from './páginas/usuario/lista-categorias/lista-categoria.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'editar-perfil/:id', component: EditarPerfilComponent },

  { path: 'mod', component: BoardModeradorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'usuario', component: BoardUsuarioComponent },
  // { path: 'home', redirectTo: 'home', pathMatch: 'full' },

  { path: 'lista-receita', component: ListaReceitaComponent },
  { path: 'editar-receita/:id', component: EditarReceitaComponent },
  { path: 'registrar-receita', component: RegistrarReceitaComponent },

  { path: 'lista-categoria', component: ListaCategoriaComponent },
  { path: 'registrar-categoria', component: RegistrarCategoriaComponent },
  { path: 'editar-categoria/:id', component: EditarCategoriaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
