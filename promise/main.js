const sumPromise = (a, b) => {
    const promise = new Promise((resolve, reject) => {
        if(isNaN(a) || isNaN(b)){
            reject('Números inválidos!');
        } else {
            setTimeout( () => 
              resolve(a + b), 
              1000);
        }
    });

    return promise;
}

function subtractPromise(a, b) {
    const promise = new Promise( (resolve, reject) => {
        if(isNaN(a) || isNaN(b)) reject('Números inválidos!');
        else resolve(a - b);
    });

    return promise;
}

// console.log(sumPromise(5, 10));

sumPromise(5, 10)
  .then( (returned) => sumPromise(returned, 20) )
  .then( (newReturned) => subtractPromise(newReturned, 'a') )
  .then( (returned) => console.log(returned) )
  .catch( (rejected) => console.log(rejected) );

setTimeout( () => console.log("Já saiu a resposta?"), 500);

setTimeout( () => 
    console.log("Certeza que a resposta já saiu!"), 
    2500);