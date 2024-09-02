async function sumPromise(a, b) {
    const promise = new Promise( (res, rej) => {
        if(isNaN(a) || isNaN(b)) rej('Números inválidos');
        else res(a + b);
    });

    return promise;
}

async function main() {
    const result = await sumPromise(5, 10);
    console.log(result);
}

main();