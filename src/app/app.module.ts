import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './páginas/usuario/cadastro-usuario/cadastro-usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {UsuarioComponent} from "./páginas/usuario/usuario.component";
import { PerfilComponent } from './páginas/usuario/perfil/perfil.component';
import { RegistrarReceitaComponent } from './páginas/registrar-receita/registrar-receita.component';
import { EditarReceitaComponent } from './páginas/editar-receita/editar-receita.component';
import { ListaReceitaComponent } from './páginas/usuario/lista-receita/lista-receita.component';
import { LoginComponent } from './páginas/usuario/login/login.component';
import { BoardAdminComponent } from './páginas/usuario/board-admin/board-admin.component';
import { BoardModeradorComponent } from './páginas/usuario/board-moderador/board-moderador.component';
import { BoardUsuarioComponent } from './páginas/usuario/board-usuario/board-usuario.component';
import { HomeComponent } from './páginas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    UsuarioComponent,
    PerfilComponent,
    RegistrarReceitaComponent,
    EditarReceitaComponent,
    ListaReceitaComponent,
    LoginComponent,
    BoardAdminComponent,
    BoardModeradorComponent,
    BoardUsuarioComponent,
    HomeComponent
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
