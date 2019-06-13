//1.
class Circulo{
    private _coordenadaX: number
    private _coordenadaY: number
    private _raio : number

    constructor(x: number, y: number, r: number){
        this._coordenadaX = x;
        this._coordenadaY = y;
        this._raio = r;
    }

    comprimento(r: number): number{
        return 2*Math.PI*r;
    }

    area(r: number): number{
        return Math.PI*(r**2)
    }
}

//2. e 3.
class Moeda{
    private _valor: number
    private _nome: string

    constructor(valor: number, nome: string){
        this._valor = valor;
        this._nome = nome;
    }

    get valor(): number{
        return this._valor;
    }

    get nome(): string{
        return this._nome;
    }
}

class Cofrinho{

    private moedas: Moeda[] = [];
    
    adicionar(m: Moeda): void{

        this.moedas.push(m);
    }

    calcularTotal(): number{
        const somador:(x:number, y:Moeda)=>number = (soma, moeda) => soma + moeda.valor;
        return this.moedas.reduce(somador, 0);
    }

    menorValor(): number{
        let min: number = this.moedas[0].valor
        for(let i = 1; i < this.moedas.length; i++){
            if(min < this.moedas[i].valor){
                min = this.moedas[i].valor;
            }
        }
        return min;
    }

    menorMoeda(): Moeda{
        let min: number = this.moedas[0].valor
        let j: number = 0;
        for(let i = 1; i < this.moedas.length; i++){
            if(min < this.moedas[i].valor){
                min = this.moedas[i].valor;
                j = i;
            }
        }
        return this.moedas[j];
    }

    freq_map(): Map<number,number>{
        let map_contador = new Map();
        for(let k = 1; k < this.moedas.length; k++){
            if(map_contador.has(this.moedas[k].valor)){
                map_contador.set(this.moedas[k].valor, map_contador.get(this.moedas[k].valor)!+1);
            }
            else{
                map_contador.set(this.moedas[k].valor, 1);
            }
        }
        return map_contador
    }
    
}

//4. class Subclasse extends Superclasse
abstract class Cliente{
    constructor(private _nome: string){

    }
    
    get nome(): string{
        return this._nome;
    }

    abstract getMensalidade(): number;

}

class ClienteFisico extends Cliente{
    constructor(nome: string, private _idade: number, private _salario: number){
        super(nome);
    }

    get idade(): number{
        return this._idade;
    }

    set idade(idade: number){
        this._idade = idade;
    }

    get salario(): number{
        return this._salario;
    }
    
    set salario(salario: number){
        this._salario = salario;
    }

    getMensalidade(): number{
        if(this._idade < 60){
            return 0.1*this._salario;
        }
        else{
            return 0.15*this._salario;
        }
    }
}

class ClienteJuridico extends Cliente{
    constructor(nome: string, private _mensalidade: number){
        super(nome);
    }

    set mensalidade(mensalidade: number){
        this._mensalidade = mensalidade;
    }

    getMensalidade(): number{
        return this._mensalidade;
    }
}

class CadastroClientes{
    private clientes: Cliente[] = [];

    adicionar(c: Cliente): void{

        this.clientes.push(c);
    }

    imprimirClientes(): void{
        for(let l = 1; l < this.clientes.length; l++){
            console.log(`Nome do cliente: ${this.clientes[l].nome}, Mensalidade:` + this.clientes[l].getMensalidade);
        }
    }
}
