const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}

console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    return arr.map(item => item.name).reduce((sum, current) => `${sum}, ${current}`);
}

console.log(showListOfFilms(films))

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    })
}

console.log(setFilmsIds(films))

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? 'asd' : 'qwe');
}

console.log(tranformedArray);