/* importar arquivo com funções matemáticas */
// import { PI, numeroEhPrimo, triangleChecker as verificadorDeTriangulo } from "./lib-math.js";
import * as LibMath from "./lib-math.js";

import contarImpares22 from "./lib-prova-01.js";

console.log( LibMath.numeroEhPrimo(5) );

console.log( LibMath.triangleChecker(4, 4, 5) );

console.log(LibMath.PI);

console.log('Qtd ímpares: ' + contarImpares22(2, 3, 4, 5));