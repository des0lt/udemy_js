
const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    const newArr = data.filter(item => item.amount >= 0)
                       .map(item => item.amount)
                       .reduce((sum, current) => sum + current);
    return newArr;
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
    if (data.some(item => item.amount < 0)) {
        return data.map(item => item.amount).reduce((sum, current) => sum + current)
    } else {
        return getPositiveIncomeAmount(data)
    }
};

console.log(getTotalIncomeAmount(funds));