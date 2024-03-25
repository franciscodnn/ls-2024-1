
function contarImpares(...params){
    let contador = 0;
    for(const item of params){
        if(item % 2 !== 0) contador++;
    }

    return contador;
}

export default contarImpares;