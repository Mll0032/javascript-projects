//node while-Loop-Exercises.js
const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel = "";
let numOfAstnts = "";
let shuttleAlt = "";


/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
let startingFuel = Number(input.question("How much starting fuel do you have? "));


while (startingFuel <=0){
  startingFuel = input.question("You cannot have negative fuel! Please resubmit fuel level: ")
}
 
while (startingFuel < 5000){
  console.log("You do not have enough fuel!"); 
  if (startingFuel <=5000){
    break;
}
}

while (startingFuel > 30000){
  console.log("You have too much fuel!"); 
  if (startingFuel >= 30000){
  break
  }
}

//if (startingFuel > 5000 && startingFuel < 30000){
//  console.log("Acceptable fuel Level");
//} else if (startingFuel < 0){
//  console.log("Im sorry you can not have negative fuel!");
//  let startingFuel = Number(input.question("How much starting fuel do you have? "));
//}else {
//  console.log("Not enough Fuel!");
//}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
