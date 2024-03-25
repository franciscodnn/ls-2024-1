const vetor = [3];
console.log(vetor);

/* Formas de inserção em vetores */
vetor.push(10);
console.log(vetor);

vetor.unshift(2);
console.log(vetor);

vetor.splice(2, 0, 5, 8);
console.log(vetor);
/* End of Formas de Inserção */

console.log(vetor.length);

/* Formas de remoção */
vetor.pop();
console.log(vetor);

vetor.shift();
console.log(vetor);

// delete vetor[1];
// console.log(vetor);

vetor.splice(1, 1);
console.log(vetor);

vetor.push(2, 1, 10, 4, 6);
console.log(vetor);

// vetor.slice(2, 4);
console.log(vetor.slice(2, 4));
console.log(vetor);

// console.log(vetor.sort(mySort).reverse()); // OU
console.log(vetor.sort(mySort));

const multiplos = [1, true, "Teste"];
console.log(multiplos.join(", "));
console.log(multiplos[2]);

const array1 = [1, 2, 3, 10];
const array2 = [12, 14, 16, 18];

const arrayResultante1 = [array1, array2];
console.log(arrayResultante1);

const arrayResultante2 = [...array1, ...array2];
console.log(arrayResultante2);


for(let i = 0; i < arrayResultante2.length; i++){
    console.log(arrayResultante2[i]);
}

console.log("---------");

for(const i of arrayResultante2){
    console.log(i);
}
console.log("---------");

console.log([1, 2, 3, 4].includes(1));

const cmd = 'if';

if(['if', 'switch'].includes(cmd)) console.log('comando de decisão');


function mySort(a, b){
    return b - a;
}
