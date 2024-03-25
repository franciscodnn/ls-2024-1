const str1 = "Isso é uma string";
const str2 = 'Isso é uma segunda string';
const str3 = new String("Terceira forma de string");

// console.log(str1);
// console.log(str2);
// console.log(String(str3));

const strTemplateLiterals = `Quarta forma de string`;
// console.log(typeof strTemplateLiterals);
// console.log(strTemplateLiterals);

const nome = 'Francisco';
const idade = 37;
const email = 'dantas.nobre@ifpb.edu.br';

// Imprimir Informações do usuário: nome, idade, email
// console.log("Informações do usuário: " + nome + ", " + idade + ", " + email);

// console.log(`Informações do usuário: ${nome}, ${idade}, ${email}`);

// <img src="./imagem/avatar.png" alt="Avatar da pessoa">
const htmlImg = "<img src=\"./imagem/avatar.png\" alt=\"Avatar da pessoa\">";
// console.log(htmlImg.length);

// console.log('vitória do flamengo; '.repeat(5));
// console.log('IFPB'.toLowerCase().includes('f'));
// console.log('ifpb'.toUpperCase());
// console.log('IFPB'.startsWith('IFP'));
// console.log('IFPB'.endsWith('PB'));
// console.log('Linguagens de ScrIpt'.replace(/i/gi, '1'));
// console.log('Linguagens de Script'.search('ns'));
// console.log('    Olá, Mundo     '.trim());
// const valor = '115684,10';
// console.log(valor.padStart(valor.length + 1, '0'));

// console.log('Linguagens de Script'.substring(5, 6));
// console.log('Linguagensss de Script'.slice(-6));

// console.log('Linguagens de Script'.split(' '));
// ['Linguagens', 'de', 'Script']

// console.log('Linguagens de Script'.split(''));

const str = 'Linguagens de Script';
let result = '';
for(let i = str.length - 1; i >= 0; i--){
    result += str[i];
}

// console.log(result);

console.log(str.split('').reverse().join(''));

console.log('Linguagens de Script'.match(/i/g));