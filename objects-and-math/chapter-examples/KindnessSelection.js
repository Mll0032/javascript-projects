function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
 //b) Have the code randomly pick one array, and then print 2 random items from it.
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
  let seperationLine = '----------';
  console.log(seperationLine)
for (i = 0; i < 3; i++) { 
  console.log(randomSelection(happiness));
}
  console.log(seperationLine)

for (i = 0; i < 3; i++) { 
  console.log(randomSelection(words));
}

console.log(seperationLine)

let allArrays = [happiness, words];
let selectedArray = randomSelection(allArrays);

for (let i = 0; i < 2; i++) {
  console.log(randomSelection(selectedArray));
}

console.log(seperationLine)

let newArray = [randomSelection(words), randomSelection(happiness)];
console.log(newArray);