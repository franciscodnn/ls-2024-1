const numero = 2;
let divisores = 0;

/*
for(let flag = 2; flag < numero; flag++){
    if( (numero % flag) === 0) divisores++;
}
*/

/*
let flag = 2;
while(flag < numero){
    if( (numero % flag) === 0) divisores++;
    flag++;
}
*/

let flag = 2;
do{
    if( (numero % flag) === 0) divisores++;
    flag++;
} while(flag < numero);

if(divisores > 0)
    console.log('Não é primo');
else
    console.log('É primo');


function numeroEhPrimo(numero) {
    let divisores = 0;
    let result = true;

    for(let flag = 2; flag < numero; flag++){
        if( (numero % flag) === 0) divisores++;
    }

    if(divisores > 0) result = false;

    return result;
}