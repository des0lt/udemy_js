
function calculateVolumeAndArea(side) {
    // let side = prompt("Enter the side of the cube: ", "");
    let volume = side * side * side;
    let area = 6 * side * side;

    if (!Number.isInteger(side) || side === "" || side === null || side < 0 || isNaN(side)){
        return ('При вычислении произошла ошибка')
    } else {
        return (`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
    }

}

console.log(calculateVolumeAndArea(5));

function getCoupeNumber(seat) {
    // let seat = prompt("Enter the seat num: ", "");
    if (!Number.isInteger(seat) || seat === "" || seat === null || seat < 0 || isNaN(seat)){
        return('Ошибка. Проверьте правильность введенного номера места')
    }
    else if (seat === 0 || seat > 36) {
        return('Таких мест в вагоне не существует')
    } else {
        return(Math.ceil(seat / 4));
    }
}

console.log(getCoupeNumber(5));