/*
    CIT 281 Project 2
    Name: Alex Salazar
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
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

function getRandomString(minLength,maxLength) {
    //let letter = getRandomLetter();
    maxLength = 20;
    minLength = 10;
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

console.log(getRandomString())


//sort
function getSortedString(string){return string.split('').sort().join('');}
console.log(getSortedString("ambz"))

//pulls letters from a string to return single letters to sort them in alaphabetical order