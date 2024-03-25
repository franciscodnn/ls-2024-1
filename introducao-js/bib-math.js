function numeroEhPrimo(numero) {
    let divisores = 0;
    let result = true;

    for(let flag = 2; flag < numero; flag++){
        if( (numero % flag) === 0) divisores++;
    }

    if(divisores > 0) result = false;

    return result;
}

