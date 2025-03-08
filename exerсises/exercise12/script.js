const someString = 'This is some strange string';

function reverse(str) {
    let qwe = '';
    if (typeof(str) !== 'string') {
        return 'Ошибка!';
    } else {
        for (let i = 1; i <= str.length; i++) {
            qwe += str[str.length - i];
        }
    }

    return qwe;
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = '';
    if (arr.length <= 0) {
        result = 'Нет доступных валют';
    } else {
        result += 'Доступные валюты:\n'
        arr.forEach((element) => {
            if (element !== missingCurr) {
                result += `${element}\n`;
            }
        });
    }
    return result;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));