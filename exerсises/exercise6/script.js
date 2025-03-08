"use strict"; //

function sayHello(name) {
    return (`Hello, ${name}`);
}

sayHello("Oleg");


function returnNeighboringNumbers(num) {
    let arr = [];
    for(let i = 0; i < 3; i++) {
        arr[i] = num + i - 1;
    }
    console.log(arr);
}

returnNeighboringNumbers(50);


function getMathResult(first, second) {
    let result = first;
    if (typeof(second) === 'number' && second > 0) {
        for (let i = 2; i <= second; i++) {
            result =  result + '---' + first * i;
        }
    }

    return result;
}

getMathResult(10, 10);