const findTheOldest = function(arr) {
    return arr.reduce((oldest, currentPerson) => {
        oldest.yearOfDeath ??= new Date().getFullYear();
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        
        currentPerson.yearOfDeath ??= new Date().getFullYear();
        const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        return currentAge > oldestAge ? currentPerson : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
