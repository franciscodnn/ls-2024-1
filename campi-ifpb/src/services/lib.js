import database from '../model/database.js';

const load = () => {
    let data = window.localStorage.getItem('campi');
    
    if(data == null){
        window.localStorage.setItem('campi', JSON.stringify(database));
        data = database;
    } else {
        data = JSON.parse(data);
    }

    return data;
}

const post = (objeto) => {
    const database = JSON.parse(window.localStorage.getItem('campi'));

    database.push(objeto);

    console.log(database);

    window.localStorage.setItem('campi', JSON.stringify(database));

    return database;
}

const remove = (titulo) => {
    const database = JSON.parse(window.localStorage.getItem('campi'));

    const filteredDatabase = database.filter(
        (elem) => {
            if(elem.titulo != titulo) return true;
    });

    window.localStorage.setItem('campi', JSON.stringify(filteredDatabase));

    console.log(filteredDatabase);

    return filteredDatabase;
}

export { load, post, remove };