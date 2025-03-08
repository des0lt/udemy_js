/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1)
const adds = document.querySelectorAll(".promo__adv img");
adds.forEach((element) => {
    element.remove();
})

// 2)
const genre = document.querySelector(".promo__genre");
genre.textContent = 'Драма';

// 3)
const bg = document.querySelector(".promo__bg");
bg.style.backgroundImage = "url('img/bg.jpg')";

// 4)
movieDB.movies.sort();
const list = document.querySelectorAll(".promo__interactive-item");
movieDB.movies.forEach((element, i) => {
    list[i].innerHTML = `${i + 1}. ${movieDB.movies[i]}`;
});


function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i ++) {
        result *= x;
    }

    return result;
}

function pow(x, n) {
    if (n === 1) {
        return x;
    } else { 
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 6));
