"use strict";
const word = 'pineapple';
console.log(word);
let zak;
zak = {
    name: 'Zak',
    age: 18
};
function testFunc(word, num) {
    let sentence = `The word is: ${word}`;
    let secondSentence = `The number is ${num}`;
    let combinedSentence = sentence + ' and ' + secondSentence;
    return combinedSentence;
}
console.log(testFunc('pig', 5));
