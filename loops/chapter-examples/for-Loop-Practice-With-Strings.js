const input = require('readline-sync');
// Create a string variable containing your name.
let name = input.question('What is your name? ');

// Write a for loop that prints each character in your name on a different line.

for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}