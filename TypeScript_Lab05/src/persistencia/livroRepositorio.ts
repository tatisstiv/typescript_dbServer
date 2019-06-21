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
        return LivroModel.find().exec();
    }

    static async buscarPorAutor(id: string): Promise<Livro[]>{
        return LivroModel.where('autores').equals(id).populate('autores', AutorModel).exec();
    }

    static async buscarPorId(id: string): Promise<Livro|null>{
        return LivroModel.findById(id).exec();
    }

    static async alterar(id: string, parametro: string, valor: string|boolean): Promise<Livro> {
        const livro = await LivroModel.findById(id).exec();
        if(livro !== null){
            livro.set(parametro, valor);
            return livro.save();
        }
        else {
            throw new Error('Livro não encontrado');
        }
    }
}