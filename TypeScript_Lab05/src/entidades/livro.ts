import {Autor} from './autor';

export interface Livro {
    _id: any,
    titulo: string,
    autores: Autor[],
    disponivel: boolean
}