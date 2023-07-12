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
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { RegistrarCategoriaComponent } from './páginas/registrar-categoria/registrar-categoria.component';
import { EditarCategoriaComponent } from './páginas/editar-categoria/editar-categoria.component';
import { EditarPerfilComponent } from './páginas/usuario/editar-perfil/editar-perfil.component';
import { ListaCategoriaComponent } from './páginas/usuario/lista-categorias/lista-categoria.component';

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
    HomeComponent,
    RegistrarCategoriaComponent,
    EditarCategoriaComponent,
    EditarPerfilComponent,
    ListaCategoriaComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
