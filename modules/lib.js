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

function calculateCircleArea(r){
    return Math.PI * (r**2);
}

const calcCircleArea = (r) => Math.PI * (r**2);

export { triangleChecker, calcCircleArea };

export default calculateCircleArea;