const input = require("readline-sync");

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
foodCab = food.split(',').sort();
equipmentCab = equipment.split(',').sort();
petsCab = pets.split(',').sort();
sleepAidsCab = sleepAids.split(',').sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = []
cargoHold.push(foodCab, equipmentCab, petsCab, sleepAidsCab);
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userSelectedNumber = Number(input.question("Select a cabinet(0 - 3): "));
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (userSelectedNumber === 0) { 
    let userSelectedItem = (input.question("Select and item: "))
    if (cargoHold[0].includes(userSelectedItem)){
        console.log(`Cabinet ${userSelectedNumber} does contain ${userSelectedItem}`);
    }else {
        console.log(`Cabinet ${userSelectedNumber} does not contain ${userSelectedItem}`);
    }
}else if (userSelectedNumber === 1) {
    console.log(cargoHold[1]);
}else if (userSelectedNumber === 2) {
    console.log(cargoHold[2]);
}else if (userSelectedNumber === 3) {
    console.log(cargoHold[3]);
}else {
    console.log("I said pick a number between 0-3!");
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
