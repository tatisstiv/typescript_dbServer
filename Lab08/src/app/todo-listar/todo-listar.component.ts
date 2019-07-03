import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-listar',
  templateUrl: './todo-listar.component.html',
  styleUrls: ['./todo-listar.component.css']
})
export class TodoListarComponent implements OnInit {
  displayedColumns: string[] = ['id', 'userid', 'title', 'completed'];
  dataSource: Todo[] = [];

  constructor(
    private todoServ: TodoService
  ) { }

  ngOnInit() {
    this.todoServ.buscarTodos().subscribe(
      dados => this.dataSource = dados,
      erro => {
        console.log(erro);
      }
    );
  }

}
