"use strict" //

//1

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

//console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(arr);
console.log(result);

//2

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === "number") {
        data[i] = data[i] * 2;
    } else {
        data[i] = data[i] + " - done";
    }
}

console.log(data);

//3

const data1 = [5, 10, 'Shopping', 20, 'Homework'];
const result1 = [];

for (let i = 1; i <= data1.length; i++) {
    result1[i - 1] = data1[data1.length - i]
}

console.log(result1);