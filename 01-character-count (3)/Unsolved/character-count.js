// Write code to create a function that accepts a string and returns an object containing the number of times each character appears in the string

var characterCount = function(str) {
    let countObj = {};

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];

        if (letter in countObj){
            countObj[letter]++
        } else {
            countObj[letter] = 1
        }
    }
    return countObj;
};
