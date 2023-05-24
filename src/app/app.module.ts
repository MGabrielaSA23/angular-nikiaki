import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroUsuarioComponent } from './páginas/usuario/cadastro-usuario/cadastro-usuario.component';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './páginas/usuario/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    UsuarioDetailsComponent,
    UsuarioComponent
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
