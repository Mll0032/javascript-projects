let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

//Using just .split() turns the string str into an array and then divides it by the comma.
console.log(str.split());

//Using .split('e') not only turns the string str into an array but removes all e's in the array. I see also that when this happens the array divides by the indexes based off spaces
//we get weird indexes that hold parts of words.
console.log(str.split('e'));

//Using .split(' ') returns an array that has divided the words into indexes based of the space character.
console.log(str.split(' '))

//The overall purpose of the parameter inside the () is to tell the compiler what to divide the indexes by. 

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

//Using .join() turns the array into a string along with the commas
console.log(arr.join());

//Using .join('a;) turns the array into a string and adds and a between every chartacter but not at the beggining or end of the string.
console.log(arr.join('a'));

//Using .join(' ') turns the array into a string and adds a space between every character but not at the beggining or the end of the string.
console.log(arr.join(' '));

//Using .join('') turns the array into a string without anything in between the the characters
console.log(arr.join(''));

//The over purpose of the parameter inside the () is to tell the compiler what is between each character of the string.

//3) Do split or join change the original string/array?
console.log(str);
console.log(arr);

//No split and join can be assigned to new variable to show the new string and array that split and join make but do not change the original.

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

let cargoHoldArray = (cargoHold.split(','));
cargoHoldArray.sort();
console.log(cargoHoldArray.join(','));

console.log(cargoHold.split(',').sort().join(','));
