import { Emprestimo } from "../entidades/emprestimo"
import { EmprestimoModel } from "./emprestimoModel"
import { LivroModel } from "./livroModel";

export class EmprestimoRepositorio{
    static async criar(emprestimo: Emprestimo): Promise<Emprestimo> {
        let novoEmprestimo = await EmprestimoModel.create(emprestimo);
        return novoEmprestimo.save();
    }

    static async buscar():Promise<Emprestimo[]> {
        return EmprestimoModel.find().exec();
    }

    static async alterar(id: string, parametro: string, valor: string): Promise<Emprestimo> {
        const emprestimo = await EmprestimoModel.findById(id).exec();
        if(emprestimo !== null){
            emprestimo.set(parametro, valor);
            return emprestimo.save();
        }
        else {
            throw new Error('Emprestimo não encontrado');
        }
    }

    static async buscarPorLivro(id: string): Promise<Emprestimo|null>{
        return EmprestimoModel.findOne({ livro: id});
    }
}