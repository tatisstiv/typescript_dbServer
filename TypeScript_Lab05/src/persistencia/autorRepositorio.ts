import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export class AutorRepositorio {
    static async criar(autor: Autor): Promise<Autor> {
        let novoAutor = await AutorModel.create(autor);
        return novoAutor.save();
    }

    static async buscar(): Promise<Autor[]> {
        let consulta = AutorModel.find();
        return consulta.exec();
    }

    static async buscarPorSobrenome(sobrenome: string): Promise<Autor[]> {
        let consulta = AutorModel.find({ultimo_nome: sobrenome});
        return consulta.exec();
    }

    static async buscarPorNome(nome: string): Promise<Autor[]> {
        let consulta = AutorModel.find({primeiro_nome: nome});
        return consulta.exec();
    }

    static async alterar(id: string, parametro: string, valor: string): Promise<Autor> {
        const autor = await AutorModel.findById(id).exec();
        if(autor !== null){
            autor.set(parametro, valor);
            return autor.save();
        }
        else {
            throw new Error('Autor não encontrado');
        }
    }
}
