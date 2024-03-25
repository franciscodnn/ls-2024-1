function triangleChecker(s1, s2, s3) {
    let isTriangle = (s1 + s2 > s3) ? true : false;
    isTriangle = (s2 + s3 > s1) ? true : false;
    isTriangle = (s1 + s3 > s2) ? true : false;
    isTriangle = (s1 > 0 && s2 > 0 && s3 > 0) ? true : false;

    let result = undefined;
    if(isTriangle === true) {
        result = 'escaleno';
        result = (s1 === s2 || s2 === s3 || s1 === s3) ? 'isosceles' : result;
        result = (s1 === s2 && s2 === s3) ? 'equilatero' : result;
    } else {
        result = 'none';
    }

    return result;
}

console.log( triangleChecker(4, 4, 4) );
console.log( triangleChecker(3, 4, 4) );
console.log( triangleChecker(3, 4, 5) );
console.log( triangleChecker(3, 4, -5) );

// const x = 5;
// const result = (x % 2 === 0) ? 'Par' : 'Ímpar';
// console.log(result);
// if(x % 2 === 0) 
//   console.log('Par');
// else
//   console.log('Ímpar');