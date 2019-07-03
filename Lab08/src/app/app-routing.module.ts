import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListarComponent } from './todo-listar/todo-listar.component';
import { TodoFiltrarComponent } from './todo-filtrar/todo-filtrar.component';
import { TodoEditarComponent } from './todo-editar/todo-editar.component';
import { TodoCadastrarComponent } from './todo-cadastrar/todo-cadastrar.component';

const routes: Routes = [
  {path: 'listar', component: TodoListarComponent},
  {path: 'editar/:id', component: TodoEditarComponent},
  {path: 'cadastrar', component: TodoCadastrarComponent},
  {path: 'filtrar', component: TodoFiltrarComponent},
  {path: '**', redirectTo: 'listar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
