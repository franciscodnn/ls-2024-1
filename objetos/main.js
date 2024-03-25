const fulano = {
    nome: 'Fulano',
    email: 'fulano@gmail.com',
    nascimento: '10/10/2002'
}

// console.log( fulano.nome );

fulano.ocupacao = 'Analista de TI';

// console.log( fulano );

const sicrano = {
    nome: 'Sicrano',
    email: 'sicrano@gmail.com',
    nascimento: '2001-01-05',
    123: 'teste',

    obterIdade: function() {
        const result = (new Date()).getFullYear() - new Date(this.nascimento).getFullYear();

        return result;
    }
}

const jsonSicrano = JSON.stringify(sicrano);

console.log( jsonSicrano );

// console.log( sicrano.obterIdade() );

// console.log( sicrano["123"] );

const students = {
    20181234: {
      name: 'fulano',
      email: 'fulano@gmail.com',
    },
    20181235: {
      name: 'sicrano',
      email: 'sicrano@gmail.com',
    },
  };

// console.log(students.name);



const students2 = [
    {
      name: 'fulano',
      email: 'fulano@gmail.com',
    },
    {
      name: 'sicrano',
      email: 'sicrano@gmail.com',
    },
  ];

const students3 = students2.map( (e) => { return {...e} });

students3[1].name = 'José';

// console.log( students2[1].name );

const estudante = {
    nome: 'Fulano',
    curso: 'TSI',
    email: 'fulano@gmail.com'
}

const estudante2 = {...estudante};

estudante2.nome = 'José';

// console.log(estudante.nome);

const ips = [
    { address: '192.168.0.2', mask: '255.255.255.0' },
    { address: '192.168.0.10', mask: '255.255.255.0' },
    { address: '192.168.0.26', mask: '255.255.255.0' },
  ];

for(const ip of ips){
    // console.log(ip);
}

const nome = 'Fulano';
const email = 'fulano@gmail.com';

const obj = {
    nome,
    email
}

// console.log(obj.nome);



const jsonCEP = JSON.parse(`{
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
  }`);

// const objJsonCEP = JSON.parse(jsonCEP);

// console.log( jsonCEP );

// console.log( JSON.stringify(jsonCEP) );