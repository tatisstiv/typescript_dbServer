import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoCadastrarComponent } from './todo-cadastrar/todo-cadastrar.component';
import { TodoListarComponent } from './todo-listar/todo-listar.component';
import { TodoFiltrarComponent } from './todo-filtrar/todo-filtrar.component';
import { TodoEditarComponent } from './todo-editar/todo-editar.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodoCadastrarComponent,
    TodoListarComponent,
    TodoFiltrarComponent,
    TodoEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
