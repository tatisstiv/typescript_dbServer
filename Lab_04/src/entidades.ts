export class Moeda{
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

export class Cofrinho{

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