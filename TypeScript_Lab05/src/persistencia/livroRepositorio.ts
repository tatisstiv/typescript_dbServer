import {} from 'mongoose';
import {LivroModel} from './livroModel';
import { Livro } from '../entidades/livro';
import { AutorModel } from './autorModel';

export class LivroRepositorio{
    static async criar(livro: Livro): Promise<Livro>{
        return LivroModel.create(livro);
    }

    static async buscar(): Promise<Livro[]>{
        return LivroModel.find().populate('autores', AutorModel).exec();
    }
}