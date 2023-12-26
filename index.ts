const word: string = 'pineapple'

console.log(word)

interface test {
    name: string,
    age: number
}

let zak: test

zak = {
    name: 'Zak',
    age: 18
}

function testFunc (word: string, num: number): string {
    let sentence: string = `The word is: ${word}`
    let secondSentence: string = `The number is ${num}`
    let combinedSentence: string = sentence + ' and ' + secondSentence
    return combinedSentence
}

console.log(testFunc('pig', 5))