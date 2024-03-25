import { functionalSumOdds, print, functionalPrint, products } from "./bib.js";

const array = [1, 2, 3];

array.push(4);
// console.log(array);

const array2 = [...array];
array2.push(5);
// console.log(array);
// console.log(array2);

// console.log(typeof 5);
// console.log(typeof array);
// console.log(Array.isArray(array));

// --------- Funcional
// console.log( functionalSumOdds(1, 2, 3, 4, 5) );
// print(1, 2, 3, 4, 5);
// console.log('-------');
// functionalPrint(1, 2, 3, 4, 5);

console.log( functionalSumOdds(1, 2, 3, 4, 5) );

console.log([2, 4, 6, 7].filter((value) => value % 2 == 0));

console.log([2, 4, 6].map( (value) => value * 2) );

const vetor = [
    {id: 1, qtde: 5, preco: 10},
    {id: 1, qtde: 2, preco: 20}
];

// console.log( products(vetor) );

const vetorSubtotais = [50, 80, 120];
console.log( 
    vetorSubtotais.reduce( (previous, current) => previous + current, 0)
);
