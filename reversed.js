// create an app that checks if the word is a palindrome
// example:
// if the word is "racecar" then it would turn true since "racecar" backwards is still "racecar"
// if the word is "hill" then it would return false since "hill" backwards is "llih"
const reversedWord = word =>{
    const reversedWord = word.split('').reverse().join('')
    return reversedWord;
}

console.log(reversedWord('PRICK'));

module.exports = reversedWord;
