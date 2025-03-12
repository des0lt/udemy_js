"use strict";


//filter 

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
    return name.length < 5;
    // if (name.length < 5) {
    //     return name;
    // }
});

console.log(shortNames);

//map

const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(item => item.toLocaleLowerCase());

// let answers = ['IvAn', 'AnnA', 'Hello'];
// answers = answers.map(item => item.toLocaleLowerCase());

// const result = answers.map(item => {
//     return item.toLocaleLowerCase();
// })

console.log(result);


//some/every

const someMthd = [4, 'asd', 'qwezxc'];

console.log(someMthd.some(item => typeof(item) === 'number')); //хотябы один элемент соответствует условию

const everyMthd = [4, 'asd', 'qwezxc'];

console.log(everyMthd.every(item => typeof(item) === 'number')); //Все элементы соответствуют условию


//reduce

// const arr = [5, 3, 7, 2, 1];

// const res = arr.reduce((sum, current) => sum + current);

// console.log(res);

const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);

console.log(res);

//practice

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'aminal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);