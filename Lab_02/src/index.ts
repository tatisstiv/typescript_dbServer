// 1.
let inicio: number = 7;
let fim: number = 15;

//solução com for
for(let i = inicio; i <= fim; i++){
    if((i % 2) == 0){
        console.log(i);
    }
}

//solução com while
while(inicio <= fim){
    if((inicio % 2) == 0){
        console.log(inicio);
    }
    inicio++;
}

//2.
/*let i: number = 0;
while (i != 10) {
i += 0.2;
}*/
// o programa não dá erro de compilação, mas entra num loop infinito, pois 10.0 nunca será igual a 10 em razão do sistema fortemente tipado do typescript

//3.
function min(x: number, y: number): number {
    if(x < y){
        return x;
    }
    else return y;
}


console.log(min(8, 6));

//4.
//solução iterativa
function pow_iterativa(x: number, y: number): number{
    let resultado: number = 1;
    if(y != 0){
        for(let j = 1; j <= y; j++){
            resultado = resultado*x;
        }
    }
    return resultado;
}

console.log(pow_iterativa(4, 3))

//solução recursiva
function pow_recursiva(x: number, y: number): number{
    let resultado: number = 1;
    if(y == 0){
        return 1;
    }
    else{
        return x*pow_recursiva(x, y-1);
    }
}

console.log(pow_recursiva(4, 3))

//5.
function toMaiusculaPrimeira(s: string): string{
    s = s.substring(0,1).toUpperCase().concat(s.substring(1));
    return s;
}

console.log(toMaiusculaPrimeira('frase teste'));

//6.
function getMax(arr: number[]): number{
    let max: number = arr[0];
    for(let k = 1; k < arr.length; k++){
        if(max < arr[k]){
            max = arr[k];
        }
    }
    return max;
}

console.log(getMax([1, 4, 7, 5]))

//7.
function freq_map(array: number[]): Map<number,number>{
    let map_contador = new Map();
    for(let l = 1; l < array.length; l++){
        if(map_contador.has(array[l])){
            map_contador.set(array[l], map_contador.get(array[l])!+1);
        }
        else{
            map_contador.set(array[l], 1);
        }
    }
    return map_contador
}

console.log(freq_map([3, 5, 0, 5, 4, 2, 2]))