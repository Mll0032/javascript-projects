let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.


//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.
//No it appears that the result does not alter but if we initialsed an array we could store and use that new array later
console.log(holdCabinet1.concat(holdCabinet2));
console.log(holdCabinet1);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?
//No it appears to that it does not edit the orgional arrays
console.log(holdCabinet1.slice(0,2));
console.log(holdCabinet1);

console.log(holdCabinet2.slice(2,4));
console.log(holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?
//Yes this does appear to alter the original array reversing the order and storing that as the array 
console.log(holdCabinet1.reverse());
console.log(holdCabinet1);

//Yes this does appear to alter the original array. It sorts it first by numbers then by words in alphebetical order based off the first letter of the word but I think the sort is 
//sorting by converting all elements in the array to strings then based off the value of the first piece in the string 4 from 42.
console.log(holdCabinet2.sort());
console.log(holdCabinet2);