// import numeroEhPrimo from "./bib-math.js";

for(let flag = 2; flag < 51; flag++){
    if( numeroEhPrimo(flag) == true){
        // console.log(flag);
    }
}

const ehPrimo = function(numero) {

}

const soma = function(op1, op2){
    return op1 + op2;
}

// console.log('Soma: ' + soma(2, 3));

const multiplicacao = (op1, op2) => op1 * op2; // (op1, op2) => { // function(op1, op2) {
    // return op1 * op2;
// }
// console.log('Multiplicação: ' + multiplicacao(2, 3));

const divisao = (op1, op2 = 1) => op1 / op2;
// console.log('Divisão: ' + divisao(8, 4));

// somatorio(2, 3, 8, 10, 15, 'string');

function somatorio(...variaveis){
    for(const v in variaveis){
        console.log(variaveis[v]);
    }
}

somatorioArray([2, 3, 8, 10, 15, 'string']);

function somatorioArray(vetor){
    for(const e of vetor){
        console.log(e);
    }
}

loopString('teste');

function loopString(str){
    for(let s of str){
        s = 'a';
        console.log(s);
    }

    console.log(str);
}

function numeroEhPrimo(numero) {
    let divisores = 0;
    let result = true;

    for(let flag = 2; flag < numero; flag++){
        if( (numero % flag) === 0) divisores++;
    }

    if(divisores > 0) result = false;

    return result;
}