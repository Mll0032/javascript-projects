let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 400;
let shuttleSpeed = 17501;

// 3) Write conditional expressions to satisfy the following safety rules:

// a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
if (crewStatus === true) {
    console.log("Crew Ready");
} else if (crewStatus !== true){
    console.log("Crew Not Ready");
}

// b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
if (computerStatusCode === 200) {
    console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
    console.log("Success! Computer Online.");
} else {
    console.log("Alert: Computer Offline!");
}

// c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
if (shuttleSpeed > 17500) {
    console.log("Alert: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
    console.log("Alert: Cannot maintain orbit!");
} else {
    console.log("Stable Speed");
}

// 4) PREDICT: Do the code blocks shown in the 'predict.txt' file produce the same result?

//the starting if statement is testing to see if all 3 condition are true then print all systems go
//the else clause says to otherwise print warning. Not ready.
//if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
    //console.log("all systems go");
 //} else {
 //   console.log("WARNING. Not ready");
 //}


//the first if statement here is checking to see if any of the condition here are true 
//!crewSatus here is true but the not operator would be asking if crewstatus if not true 
//then print Warning. Not ready. same thing for the other variables
// if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
//    console.log("WARNING. Not ready");
//} else {
//    console.log("all systems go");
// }

//It looks like these statement are doing the same thing but in reverse order one is checking to see
//if variables are true the other is if variables are false
console.log("Yes");
