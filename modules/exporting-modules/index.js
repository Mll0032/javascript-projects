// Import the modules exported from practiceExports.js below:
//for use of single function 
// const palindromeCheck = require('./practiceExports.js');

// console.log(typeof palindromeCheck);
// console.log(palindromeCheck('that'));
// console.log(palindromeCheck('radar'));

//for use of an object with multiple functions
const practice = require('./practiceExports.js');
let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(typeof practice);
console.log(practice);
console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));

for (i=0; i < 3; i++){
    console.log(practice.randomArrayElement(arr));
}