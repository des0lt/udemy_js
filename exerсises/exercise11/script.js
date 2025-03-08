const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    const family = arr;
    let res = 'Семья состоит из:';
    if (family.length === 0) {
        return `Семья пуста`;
    } else {
        family.forEach((element) => res += ` ${element}` );
        return res;
    }
}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let res = '';
    arr.forEach((element) => res += `${element}\n`.toLowerCase());
    console.log(res.trim());
}

standardizeStrings(favoriteCities);

