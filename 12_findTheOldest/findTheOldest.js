const findTheOldest = function(arr) {
    const ages = arr.map((person) => {
        if (!person.yearOfDeath) {
            const deathYear = new Date().getFullYear();
            return deathYear - person.yearOfBirth;
        }
        else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    });

    let oldest = 0;
    ages.forEach(age => {
        if (age > oldest) {
            oldest = age;
        }
    });
    return arr[ages.indexOf(oldest)];
};

// Do not edit below this line
module.exports = findTheOldest;
