import { Emprestimo } from "../entidades/emprestimo"
import { LivroRepositorio } from "../persistencia/livroRepositorio";
import { EmprestimoRepositorio } from "../persistencia/emprestimoRepositorio";
import { Livro } from "../entidades/livro";

export async function emprestarLivro(idLivro:string):Promise<Emprestimo>{
    const umLivro = await LivroRepositorio.buscarPorId(idLivro);
    if(umLivro !== null){
        if(umLivro.disponivel){
            let emprestimo:Emprestimo = {
                livro: umLivro,
                dataRetirada: new Date(Date.now()),
                dataEntrega: new Date(Date.now()+ 7*24*60*60*1000)
            };
            await LivroRepositorio.alterar(idLivro, 'disponivel', false);
            return await EmprestimoRepositorio.criar(emprestimo);
        }
        else{
            throw new Error('Livro já alugado');
        }
    }
    else {
        throw new Error('Livro não encontrado');
    }

}

export async function devolverLivro(idLivro:string):Promise<void>{
    let emprestimo = await EmprestimoRepositorio.buscarPorLivro(idLivro);
    if(emprestimo !== null){
        let dataEntregaReal = new Date(Date.now());
        let calcMulta = Math.floor((dataEntregaReal.getTime() - emprestimo.dataEntrega.getTime())/(1000*60*60*24));
        if(calcMulta > 0){
            console.log(`A multa será de ${calcMulta*0.5}`);
        }
        await LivroRepositorio.alterar(idLivro, 'disponivel', true);
    }
    else {
        throw new Error('Empréstimo não encontrado');
    }
}

export async function consultarLivros():Promise<void>{
    let livros = await LivroRepositorio.buscar();
    livros.forEach(async l => {
        if(l.disponivel) {
            console.log(`Livro ${l.titulo} disponivel`);
        } else {
            console.log(`Livro ${l.titulo} indisponivel`);
            let emprestimo = await EmprestimoRepositorio.buscarPorLivro(l._id)
            if(emprestimo !== null){
                console.log(`Data de entrega: ${emprestimo.dataEntrega}`);
            }
        }
    });
}