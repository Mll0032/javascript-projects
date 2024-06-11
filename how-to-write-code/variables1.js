const input = require('readline-sync');

let firstName = input.question("Enter your First name: ");
let lastName = input.question("Enter your last name: ");

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Last, First: " + lastName + ", " + firstName);