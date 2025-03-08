

// function factorial(num) {
//     if (typeof(num) !== 'number' || Math.floor(num) !== num) {
//         return 'Введите целое число';
//     } else if (num <= 0) {
//         return 1;
//     } else {
//         let res = 1;
//         for (let i = num; i > 0; i--) {
//             res *= i;        }
//         return res
//     }
// }

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

console.log(factorial(4));