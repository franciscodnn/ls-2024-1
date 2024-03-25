import Student from './student.js';
/*
const std1 = {
    name: 'Francisco',
    email: 'dantas.nobre@ifpb.edu.br',
    course: 'TSI'
};

const std2 = {
    name: 'Flávio',
    email: 'flavio@academico.ifpb.edu.br',
    course: 'TSI'
}
*/

const std1 = new Student('Francisco', 'dantas.nobre@academico.ifpb.edu.br');

console.log( std1.getName() );
console.log( std1['#email'] );
console.log( std1.userType());

console.log(Student.checkUserTypeByEmail('dantas.nobre@academico.ifpb.edu.br'));

const std2 = new Student('Maria', 'maria@academico.ifpb.edu.br', 'TSI');

console.log( Student.numberOfInstances );