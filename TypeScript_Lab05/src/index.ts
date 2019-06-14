import {connect} from 'mongoose';
import { AutorRepositorio } from './persistencia/autorRepositorio';
import { LivroRepositorio } from './persistencia/livroRepositorio';

async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');

        /*console.log('Adicionando autores...');
        let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a1}`);
        let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        console.log(`Autor inserido: ${a2}`);*/
        
        /*console.log('Buscando autores...');
        let autores = await AutorRepositorio.buscar();
        autores.forEach(autor => console.log(autor));*/

        /*console.log('Adicionando livros...');
        let l1 = await LivroRepositorio.criar({
            titulo: 'Node.js com Typescript',
            autores: [a1, a2]
        });*/
        /*let l2 = await LivroRepositorio.criar({
            titulo: 'Outro Livro',
            autores: []
        });*/

        /*esse bloco dá erro, autor não existe
        let l3 = await LivroRepositorio.criar({
            titulo: 'Outro Livro',
            autores: [{primeiro_nome: 'Eu', ultimo_nome:'Eu'}]
        });*/

        console.log('Buscando livros...');
        let livros = await LivroRepositorio.buscar();
        livros.forEach(l => console.log(`Autores: ${l.autores.map(a => a.primeiro_nome)}`));

        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

main();