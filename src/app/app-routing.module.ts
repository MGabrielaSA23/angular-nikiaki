import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './páginas/usuario/cadastro-usuario/cadastro-usuario.component';
import { PerfilComponent } from './páginas/usuario/perfil/perfil.component';
import { RegistrarReceitaComponent } from './páginas/registrar-receita/registrar-receita.component';
import { EditarReceitaComponent } from './páginas/editar-receita/editar-receita.component';
import { ListaReceitaComponent } from './páginas/usuario/lista-receita/lista-receita.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path: 'perfil', component: PerfilComponent },


  { path: 'lista-receita', component: ListaReceitaComponent },
  { path: 'editar-receita/:id', component: EditarReceitaComponent },
  { path: 'registrar-receita', component: RegistrarReceitaComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
