/*
    CIT 281 Project 1
    Name: Alex Salazar
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomLetter() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let result = "";

    for (let i = 0; i < 1; i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
};

return result;
}

console.log(getRandomLetter())
//console.log(getRandomLetter())

const getRandomString = function (minLength,maxLength) {
    //let letter = getRandomLetter();
   // maxLength = 20;
    //minLength = 10;
    let string = "";
    let num = getRandomInteger(minLength,maxLength)
    const randomletter = getRandomLetter();
    let oneletter = randomletter
    for (let i = 0; i <= num; i++) {
      string += oneletter;
      //alphabet[getRandomInteger(1,alphabet.length-1)];
    };
    return string;
};

console.log(getRandomString(10,20))


//sort
const getSortedString = function (string){return string.split('').sort().join('');}
console.log(getSortedString("ambz"))

//pulls letters from a string to return single letters to sort them in alaphabetical order

//comment