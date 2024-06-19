//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?
//This returns SCRIPT

//Experiment with other combinations (chains) of string methods.
console.log(word.toLowerCase());
console.log(word.replace('J', 'Y'));


let coffee = word.slice(0,4);
let writing = word.slice(4,10);
let combinedWords = `${coffee}${writing}`;
console.log(combinedWords);
