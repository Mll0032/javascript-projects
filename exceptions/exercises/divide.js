// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
const input = require('readline-sync');

let numerator = Number(input.question('Enter Numerator: '));
let denominator = Number(input.question('Enter Denominator: '));

// function divide(numerator, denominator) {
//     if (denominator === 0){
//         throw Error('You cannot divde by zero!');
//     }else{
//      return numerator/denominator;
//     }
// }



function divide(numerator, denominator) {
    while (denominator === 0){
      console.log('You cannot divde by zero! Please enter a valid number: ');
      denominator = Number(input.question('Enter Denominator:'));
    }
return numerator/denominator;
}
console.log(divide(numerator, denominator));