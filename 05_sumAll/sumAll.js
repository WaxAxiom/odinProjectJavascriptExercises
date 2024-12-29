const sumAll = function (start, end) {
    if (typeof start !== "number" || typeof end !== "number") {
        return "ERROR";
    }
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (start < 0 || end < 0) {
        return "ERROR";
    }

    let sum = 0;
    let min = (start < end) ? start : end;
    let max = (start > end) ? start : end;

    for (i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
