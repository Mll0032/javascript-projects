//node while-Loop-Exercises.js
const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel = "";
let numOfAstnts = "";
let shuttleAlt = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
 fuelLevel = Number(input.question("How much starting fuel do you have? "));

  // Continuously prompt the user until they enter a valid value
  while (fuelLevel <= 5000 || fuelLevel >= 30000 || isNaN(fuelLevel)) {
      if (fuelLevel <= 0 || isNaN(fuelLevel)) {
          fuelLevel = Number(input.question("You cannot have negative or non-numeric fuel! Please resubmit fuel level: "));
      } else if (fuelLevel < 5000) {
          fuelLevel = Number(input.question("You do not have enough fuel! Please resubmit fuel level: "));
      } else if (fuelLevel > 30000) {
          fuelLevel = Number(input.question("You have too much fuel! Please resubmit fuel level: "));
      }
  }
  
  console.log(`Valid starting fuel level: ${fuelLevel}`);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
const maxNumAstnts = 7;
numOfAstnts = Number(input.question("How many astronauts are there onboard? "));

while (numOfAstnts <= 1 || numOfAstnts > 7 || isNaN(numOfAstnts)) {
  if (numOfAstnts <= 0 || isNaN(numOfAstnts)) {
    numOfAstnts = Number(input.question("You cannot have negative or non-numeric number of astronauts! Please resubmit: "));
} else if (numOfAstnts > 7) {
  let numToEject = numOfAstnts - maxNumAstnts
    numOfAstnts = Number(input.question(`You have too many astonauts onboard! Please eject ${numToEject}: `));
}
}

console.log(`You have the perfect ammount of astronauts: ${numOfAstnts}`);
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel > 0 & numOfAstnts > 0) {
  shuttleAlt += 50;
  fuelLevel -= 100*numOfAstnts
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAlt} km.`)
if (shuttleAlt >= 2000){
console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit.");
}




//using seperate while loops
//while (fuelLevel <=0){
//  fuelLevel = input.question("You cannot have negative fuel! Please resubmit fuel level: ")
//}
 
//while (fuelLevel < 5000){
//  fuelLevel = input.question("You do not have enough fuel! Please resubmit fuel level: ") 
//  if (fuelLevel <=5000){
//    break;
//}
//}

//while (fuelLevel > 30000){
//  fuelLevel = input.question("You have too much fuel! Please resubmit fuel level: ")
//  if (fuelLevel >= 30000){
//  break
//  }
//}

//using if statemets to get the result
//if (fuelLevel > 5000 && fuelLevel < 30000){
//  console.log("Acceptable fuel Level");
//} else if (fuelLevel < 0){
//  console.log("Im sorry you can not have negative fuel!");
//  let fuelLevel = Number(input.question("How much starting fuel do you have? "));
//} else if (fuelLevel > 30000)
//  console.log("You have too much fuel!");
//}else {
//  console.log("Not enough Fuel!");
//}