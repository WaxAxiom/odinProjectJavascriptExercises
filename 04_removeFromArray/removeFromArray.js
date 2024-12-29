const removeFromArray = function() {
    const argsArray = Array.from(arguments);
    const array = argsArray[0];

    let filteredArray = [];
    for (i = 0; i < array.length; i++) {
        if (argsArray.slice(1,).includes(array[i])) {
        }
        else {
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
