
function fib(leng) {
    arr = [0, 1];
    if (typeof(leng) !== "number" || leng === "" || leng === null || leng < 0 || isNaN(leng) || leng === 0) {
        return "";
    } else if (leng === 1) {
        return "0";
    } else {
        for (let i = 2; i < leng; i++) {
            arr[i] = arr[i - 2] + arr[i - 1];
        }
        return(arr.join(' '));
    }
}

console.log(fib(10));

// arr = [0, 1];
// arr[0] = 1
// console.log(arr);