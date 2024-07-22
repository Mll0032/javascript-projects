//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, score){
       this.name = name;
       this.mass = mass;
       this.score = score;
    }
    addScore(scores = '') {
        this.score.push(scores);
     }
    average() {
        //if (this.score === 0) 
        //return 0;
        let arrySum = 0;
        for(let i = 0; i < this.score.length; i++){
            arrySum += this.score[i];
        }
        let arrayAvg = arrySum / this.score.length;
        return arrayAvg.toFixed(1);
     }
     determineStatus() {
        let avg = this.average();
        if (avg >= 90) {
            return 'Accepted';
        } else if (avg >= 80) {
            return 'Reserve';
        } else if (avg >= 70) {
            return 'Probationary';
        } else {
            return 'Rejected';
        }
    }

    boostToStatus(targetStatus) {
        const targetScores = {
            'Accepted': 90,
            'Reserve': 80
        };
        let targetAvg = targetScores[targetStatus];
        let tests = 0;
        
        while (this.average() < targetAvg) {
            this.addScore(100); // Adding a perfect score (100) to boost the average
            tests++;
        }
        return tests;
    }
}
let bubbaB = new CrewCandidate('Bubba Bear', '135 kg', [88, 85, 90]); 
let merryM = new CrewCandidate('Merry Maltese', '1.5 kg', [93, 88, 97]); 
let gladG = new CrewCandidate('Glad Gator', '225 kg', [75, 78, 62]); 

//test to see if objects are correct
// console.log(bubbaB);
// console.log(merryM);
// console.log(gladG);

//test to see if method addScore works
// bubbaB.addScore(83);
//test to see if average method works
// console.log(merryM.average());

//test to see if Bubb Bear accepted, resever, probation, rejected
//console.log(bubbaB.determineStatus())

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
let testsToReserve = gladG.boostToStatus('Reserve');
console.log(`Tests needed for Glad Gator to reach Reserve status: ${testsToReserve}`);
console.log(`Glad Gator's new status: ${gladG.determineStatus()}`);

let testsToAccepted = gladG.boostToStatus('Accepted');
console.log(`Additional tests needed for Glad Gator to reach Accepted status: ${testsToAccepted}`);
console.log(`Glad Gator's final status: ${gladG.determineStatus()}`);