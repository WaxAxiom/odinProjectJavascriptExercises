const fibonacci = function(N) {
    let num = parseInt(N);
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    else if (num === 1) {
        return 1;
    }

    let arr = [1, 1];
    num -= 2;
    while (num !== 0) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        num--;
    }
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
