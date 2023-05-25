import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './páginas/usuario/cadastro-usuario/cadastro-usuario.component';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {UsuarioComponent} from "./páginas/usuario/usuario.component";
import { PerfilComponent } from './páginas/usuario/perfil/perfil.component';
import { RegistrarReceitaComponent } from './páginas/registrar-receita/registrar-receita.component';
import { EditarReceitaComponent } from './páginas/editar-receita/editar-receita.component';
import { ReceitaModel } from './models/receita/receita.model';
import { ListaReceitaComponent } from './páginas/usuario/lista-receita/lista-receita.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    UsuarioDetailsComponent,
    UsuarioComponent,
    PerfilComponent,
    RegistrarReceitaComponent,
    EditarReceitaComponent,
    ReceitaModel,
    ListaReceitaComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
