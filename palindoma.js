// create an app that checks if the word is a palindrome
// example:
// if the word is "racecar" then it would turn true since "racecar" backwards is still "racecar"
// if the word is "hill" then it would return false since "hill" backwards is "llih"
const palindroma = word =>{
    reversedWord = word.split('').reverse().join('')
    if(word === reversedWord){console.log('it is a palindrome!')}
    else{console.log('this is not a palindrome')}
}

module.exports = palindroma
