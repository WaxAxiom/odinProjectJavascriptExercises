const palindromes = function (string) {
    const cleanString = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    const reverseCleanString = cleanString.split("").reverse().join("");
    return cleanString === reverseCleanString;
};

// Do not edit below this line
module.exports = palindromes;
