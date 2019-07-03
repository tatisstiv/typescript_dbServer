import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from './user.service';
import { Todo } from './todo';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlBase  = 'https://jsonplaceholder.typicode.com/todos';

  constructor(
    private http: HttpClient,
    private userServ: UserService
  ) { }

  buscarTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.urlBase).pipe(
      map(res => res || []),
      catchError(this.tratadorErros)
    );
  }

  buscarPorUserId(userId: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.urlBase}/${userId}`).pipe(
      map(res => res || []),
      catchError(this.tratadorErros)
    );
  }

  cabecalhos = new HttpHeaders().set('Content-type','application/json');

  inserir(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.urlBase,todo,{headers:this.cabecalhos}).pipe(
      map(res => res || {} as Todo),
      catchError(this.tratadorErros)
    );
  }

  tratadorErros(erro: HttpErrorResponse) {
    let mensagemErro = '';
    if (erro.error instanceof ErrorEvent) {
      //erro do lado do cliente
      mensagemErro = erro.error.message;
    } else {
      //erro do lado do servidor
      mensagemErro = `Erro status:${erro.status} - mensagem:${erro.message}`;
    }
    return throwError(mensagemErro);
  }
}
