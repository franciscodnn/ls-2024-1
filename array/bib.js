function sumOdds(...params){
    let sum = 0;
    for(let i = 0; i < params.length; i++){
        // sum = sum + (params[i] % 2 !== 0)?params[i]:0;
        if(params[i] % 2 !== 0){
            sum = sum + params[i];
        }
    }

    return sum;
}

function functionalSumOdds(...params){
    // 1. filtrar apenas pelos ímpares
    /*
    const odds = params.filter(
        function(elem) {
            return elem % 2 !== 0;
        }
    );
    */
    const odds = params.filter( (elem) => elem % 2 !== 0);

    // 2. somar
    // const sum = odds.reduce( function(previous, current) {
    //     console.log(previous + ' - ' + current);
    //     return previous + current;
    // }, 0);
    const sum = odds.reduce( (previous, current) => previous + current, 0);

    return sum;

    
}

function print(...params){
    for(let i = 0; i < params.length; i++){
        console.log(params[i]);
    }
}

function functionalPrint(...params){
    params.forEach( function(elem){
        console.log(elem);
    });
}

function products(array){
    const sum = array.reduce( (previous, current) => {
        return previous + (current.qtde * current.preco);
    }, 0)

    return sum;
}

export { sumOdds, functionalSumOdds, print, functionalPrint, products };