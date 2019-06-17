import {} from 'mongoose';
import {LivroModel} from './livroModel';
import { Livro } from '../entidades/livro';
import { AutorModel } from './autorModel';

export class LivroRepositorio{
    static async criar(livro: Livro): Promise<Livro> {
        let novoLivro = await LivroModel.create(livro);
        return novoLivro.save();
    }

    static async buscar(): Promise<Livro[]>{
        return LivroModel.find().populate('autores', AutorModel).exec();
    }

    static async buscarPorAutor(id: string): Promise<Livro[]>{
        return LivroModel.where('autores').equals(id).populate('autores', AutorModel).exec();
    }

    static async buscarPorId(id: string): Promise<Livro|null>{
        return LivroModel.findById(id).exec();
    }
}