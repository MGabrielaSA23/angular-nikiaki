import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { CadastroUsuarioComponent } from './components/cadastro-usuario/cadastro-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuario', pathMatch: 'full' },
  { path: 'usuario/:id', component: UsuarioDetailsComponent },
  { path: 'cadastro', component: CadastroUsuarioComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
