const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let holdStr = (str.slice(0,3));
let newStr = str.slice(3,10)+`${holdStr}`;
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original: ${str} New: ${newStr}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
console.log("Letter Relocation Program");
let userEnteredNum = input.question("Input number of letters to be relocated: ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if (userEnteredNum > 10) {
   console.log(`Your number is ${userEnteredNum} which is absurd and also is longer than the word, nothing will happen!`);
} else {
let userHoldStr = (str.slice(0,userEnteredNum));
let userInputNum = (str.slice(0,userEnteredNum ));
let userNewString = str.slice(userEnteredNum,10)+`${userInputNum}`;
console.log(userNewString);
} 