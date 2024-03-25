/* 
Exercício
-> Criar a função createList(n, text)
-> Retornar o texto
    <ul>
        text 1
        text 2
        ...
        text n
    </ul>
*/

function createList(n, text = 'Text'){
    const begin = '<ul>';
    const end = '</ul>';
    let result = '';

    for(let i = 1; i <= n; i++){
        result += `    <li>${text} ${i}</li>\n`;
    }

    result = `${begin}\n${result}${end}`;

    return result;
}

function createListFunctional(n, text='Text'){
    /*
    let lis = result.map(function(e, i){
        return `<li>${e} ${i + 1}</li>`
    });
    */
    // let result = `${text};`.repeat(n).split(';');
    // result.pop();
    let result = Array(n).fill(text, 0);
    result = result.map( (e,i) => `    <li>${e} ${i + 1}</li>`);
    result = result.join('\n');

    return `<ul>\n${result}\n</ul>`;
}

// console.log( createListFunctional(5, 'Item') );

// console.log(Array(5).fill('Item', 0, 5));

function stringUtils(text, cmd) {
    let result = '';
    cmd = cmd.toLowerCase();

    if(cmd === 'camelcase') {
        result = text.toLowerCase().split(' ');
        result = result.map( e => e.charAt(0).toUpperCase() + e.substring(1));
        result = result.join(' ');
    }

    return result;
}

console.log(stringUtils('LOREM IPSUM DOLOR', 'camelcase'));

console.log('lorem\nipsum dolor'.match(/[\s\n]/g).length + 1);


