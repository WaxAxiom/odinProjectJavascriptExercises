//@ts-check
const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((total, curr) => {
    return total + curr;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((total, curr) => {
    return total * curr;
  }, 1);
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  if (x === 0) {
    return 1;
  }
  else {
    return x * factorial(x - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
