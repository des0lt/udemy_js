const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let area = 0
    let volume = 0;
    let price = 0;
    data.shops.forEach(({ width, length }) => {
        area += width * length;
    });
    volume = area * data.height;
    price = volume * data.moneyPer1m3;
    if (price > data.budget) {
        return `Бюджета недостаточно`;
    } else {
        return `Бюджета достаточно`;
    }
}

console.log(isBudgetEnough(shoppingMallData));