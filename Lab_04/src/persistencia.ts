import {Moeda, Cofrinho} from './entidades'
import {promises} from 'fs';

export function salvarCofrinho(cofre: Cofrinho, nomeArquivo: string): Promise<void>{
    const cofre_json = JSON.stringify(cofre);
    return promises.writeFile(nomeArquivo, cofre_json)
    .catch(error => console.log(error))
}

export function lerCofrinho(nomeArquivo: string): Promise<Cofrinho>{
    return promises.readFile(nomeArquivo,'utf-8')
    .then(dados => JSON.parse(dados))
    .then(obj => {
        const cofre = new Cofrinho();
        for(let i=0; i<obj.moedas.length; i++){
            cofre.adicionar(new Moeda(obj.moedas[i]._valor, obj.moedas[i]._nome));
        }
        return cofre;
    });
}

