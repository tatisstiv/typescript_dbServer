import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-editar',
  templateUrl: './todo-editar.component.html',
  styleUrls: ['./todo-editar.component.css']
})
export class TodoEditarComponent implements OnInit {

  constructor(
    private rota: ActivatedRoute
  ) { }

  ngOnInit() {
    const idTarefa = this.rota.snapshot.params.id;
  }

}
