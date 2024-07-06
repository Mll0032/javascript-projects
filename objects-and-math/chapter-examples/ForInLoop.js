let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
   sign: function() {
      return this.name + " is a " + this.species;
   }
};

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.
for (item in tortoiseOne) {
   console.log(item + ", " + tortoiseOne[item]);
}

console.log(tortoiseOne.sign());

function updateAge(animal) {
   animal.age = animal.age + 1
   return animal;
}

console.log(tortoiseOne.age);
updateAge(tortoiseOne);
console.log(tortoiseOne.age);