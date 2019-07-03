import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-cadastrar',
  templateUrl: './todo-cadastrar.component.html',
  styleUrls: ['./todo-cadastrar.component.css']
})
export class TodoCadastrarComponent implements OnInit {
  tarefa: Todo = {id:0,userId:0,title:'título',completed:false};

  constructor(
    private todoServ: TodoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.todoServ.inserir(this.tarefa).subscribe(
      dado => this.router.navigateByUrl('/listar'),
      erro => console.log(erro)
    );
  }
}
