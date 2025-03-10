

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних фильмов?"),
          b = prompt("Оценка?");
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

// let i = 0;

// while (i < 2) {
//     const a = prompt("Один из последних фильмов?"),
//           b = prompt("Оценка?");
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         i++;
//     } else {
//         console.log('error');
//     }
// }

// let i = 0;

// do {
//     const a = prompt("Один из последних фильмов?"),
//           b = prompt("Оценка?");
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//             i++;
//         } else {
//             console.log('error');
//         }
// }
// while (i < 2)


if (personalMovieDB.count < 10) {
    console.log("Вы посмотрели мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы посмотрели достаточно фильмов');
} else if (personalMovieDB.count >= 30) {
    console.log("Вы посмотрели много фильмов");
} else {
    console.log("Error");
}

console.log(personalMovieDB);