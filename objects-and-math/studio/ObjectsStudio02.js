// Code your orbitCircumference function here:
function orbitCircumference(radius){ 
  return Math.round(2 * Math.PI * radius);
}

// Code your missionDuration function here:


function missionDuration(numOrbits, radius = 2000, speed = 28000) {
  let circumference = orbitCircumference(radius);
  let totalDistance = numOrbits * circumference;
  let duration = Math.round((totalDistance / speed)*100)/100;
  console.log(`The mission will travel ${totalDistance} km around the planet, and it will take ${duration} hours to complete.`);
  return totalDistance, duration
}

// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let Allcrew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let selectedCandidate = [];
  while (selectedCandidate.length < 3) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomId = arr[randomIndex];
    return selectedCandidate;
}
}
  

  
// Code your oxygenExpended function here:

function oxygenExpended(candidate, numOrbits = 3, radius = 2000, speed = 28000) {
  let duration = missionDuration(numOrbits, radius, speed);
  let oxygenUsed = candidate.o2Used(Math.round(duration*1000)/1000);
  let decimalOxUse = Math.round(oxygenUsed*1000)/1000;
  return console.log(`${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${decimalOxUse} kg of oxygen.`);
}


 
oxygenExpended(candidateA);


 
 