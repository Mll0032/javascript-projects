let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
numString = String(num);
console.log(numString.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
//test: if I know there is a decimal I can just subtract 1 from the length of the index or the length and return that
//let numDec = 123.45
//numDecString = String(numDec);
//console.log(numDecString.length -1);
//console.log(numDecString[numDecString.length - 1]);

// another way could be to replace the decimal point with nothing and then get the length to me it seems a little easier to read
let decString = String(num);
let removeDec = decString.replace('.', '');
console.log(removeDec.length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
//in w3schols.com I found includes() string method wich allowed me to logic my way through what to do with almost a conditional
if (numString.includes('.')) {
    let decString = String(num);
    let removeDec = decString.replace('.', '');
    console.log(removeDec.length);
} else if (numString.includes(!'.')) {
    numString = String(num);
console.log(numString.length);
}