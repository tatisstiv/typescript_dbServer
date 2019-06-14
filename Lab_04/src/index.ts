import {Moeda, Cofrinho} from './entidades'
import {salvarCofrinho, lerCofrinho} from './persistencia'

async function Main(){
    const cofre = new Cofrinho();
    cofre.adicionar(new Moeda(1,'1 real'));
    cofre.adicionar(new Moeda(0.1,'10 centavos'));
    cofre.adicionar(new Moeda(0.5,'50 centavos'));
    try {
        salvarCofrinho(cofre,'meuCofrinho.json');
    } catch (erro) {
        console.log('Erro de escrita do arquivo:');
        console.log(erro);
    }

    lerCofrinho('meuCofrinho.json')
    .then(cofre => console.log(cofre))
    .catch(erro => {
      console.log('Erro de leitura do arquivo:');
      console.log(erro);
    });
}
Main();