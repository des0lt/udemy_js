function getTimeFromMinutes(num) {
    // let num = prompt("enter num", "")
    let hour
    let minutes
    console.log(num)
    if (!Number.isInteger(num) || num === "" || num === null || num < 0 || isNaN(num)){
        return('Ошибка, проверьте данные');
    } else {
        hour = Math.floor((num / 60));
        console.log(hour)
        minutes = Math.round(((num / 60) - hour) * 60);
        if (hour % 10  === 1) {
            hour = `${hour} час`
        } else if (hour % 10 >= 2 && hour % 10 <= 4) {
            hour = `${hour} часа`
        } else {
            hour = `${hour} часов`
        }

        if (minutes % 10  === 1) {
            minutes = `${minutes} минута`
        } else if (minutes % 10 >= 2 && minutes % 10 <= 4) {
            minutes = `${minutes} минуты`
        } else {
            minutes = `${minutes} минут`
        }

        return(`Это ${hour} и ${minutes}`);
    }
}

console.log(getTimeFromMinutes(50));


function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    }
    else {
        return Math.max(a, b, c, d)
    }
}

console.log(findMaxNumber(1, 3, 5, 2))