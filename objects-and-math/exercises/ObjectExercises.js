let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
};

// After you have created the other object literals, add the astronautID property to each one.
let animals = [superChimpOne, salamander, chimpTwo, dog, waterBear]; 

// This is not following the DRY concept since it is doing the same thing over and over it should be a function
// superChimpOne["astronautID"] = Math.round(Math.random()*10);

// salamander["astronautID"] = Math.round(Math.random()*10);

// chimpTwo["astronautID"] = Math.round(Math.random()*10);

// dog["astronautID"] = Math.round(Math.random()*10);

// waterBear["astronautID"] = Math.round(Math.random()*10);

//
function isIdUsed(id, arr) { 
   for (let i = 0; i < arr.length; i++) {
      if (arr[i].astronautID === id) {
          return true;
      }
  }
  return false;
}

function addIdPropety(arr) {
   for (let i = 0; i < animals.length; i++){
       let id = arr[i]["astronautId"] = Math.floor(Math.random()*10);
       while (isIdUsed(id, arr)){
       id = Math.floor(Math.random() * 10)
   }
   arr[i]["astronautId"] = id;
}
   return arr
}

addIdPropety(animals);

// Add a move method to each animal object
//This is not following the DRY concept since it is doing the same thing over and over it should be a function
// superChimpOne["move"] = Math.round(Math.random()*10);

// salamander["move"] = Math.round(Math.random()*10);

// chimpTwo["move"] = Math.round(Math.random()*10);

// dog["move"] = Math.round(Math.random()*10);

// waterBear["move"] = Math.round(Math.random()*10);

function addMovesPropety(arr) {
   for (let i = 0; i < animals.length; i++){
       arr[i]["move"] = Math.round(Math.random()*10);
   }return arr
}

addMovesPropety(animals);
// Create an array to hold the animal objects.
//I added this earlier so that I could use the array to help manage the information input to the objects. 

// Print out the relevant information about each animal.

//This is not following the DRY concept since it is doing the same thing over and over it should be a function
// for (item in superChimpOne) {
//    console.log(item + ', ' + superChimpOne[item]);
// }

// for (item in salamander) {
//    console.log(item + ', ' + salamander[item]);
// }

// for (item in chimpTwo) {
//    console.log(item + ', ' + chimpTwo[item]);
// }

// for (item in dog) {
//    console.log(item + ', ' + dog[item]);
// }

// for (item in waterBear) {
//    console.log(item + ', ' + waterBear[item]);
// }

for (let i = 0; i < animals.length; i++) {
   console.log(animals[i]);
}

//Part 2: Crew Reports

function crewReports(animal){ 
   console.log(`${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronotId}.`)
}

crewReports(superChimpOne);

// Start an animal race! Part 3
function fitnessTest(arr) {
   let turnsToFinish = [];
   for (let i = 0; i < arr.length; i++) {
       let numSteps = 0;
       let turns = 0;
       while (numSteps < 20) {
           numSteps += arr[i].move();
           turns++;
       }
       turnsToFinish.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
   }
   return turnsToFinish;
}

console.log(fitnessTest(animals));