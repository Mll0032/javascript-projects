//Call the readline-syn for user input
const input = require('readline-sync');
// create an array variable containing the names (and birthdays)
let familyMemberNames = [];
let familyMembersBirthdays = [];

let familyinfo = familyMemberNames.concat(familyMembersBirthdays);

//Ask user thier parents information and send that to their respective arrays
let momsName = input.question("What is your Mom's name? ");
familyMemberNames.push(momsName);
let momsBday = input.question("When is her birthday? ");
familyMembersBirthdays.push(momsBday);

let dadsName = input.question("What is your Dad's name? ");
familyMemberNames.push(dadsName);
let dadsbday = input.question("When is his birthday? ");
familyMembersBirthdays.push(dadsbday);

//Sometimes people have more than 1 brother and sister or combinmation of brothers and sisters
//Ask user to input how many sisters they have.
let howManySisters = Number(input.question("How many sisters do you have? "));

//Use for loop to ask what each sisters information is
for (let i = 0; i < howManySisters; i++ ) {
    let sistersName = input.question("What is your Sister's name? ");
    familyMemberNames.push(sistersName);
    let sistersBday = input.question("When is her birthday? ");
    familyMembersBirthdays.push(sistersBday);
if (i > howManySisters) {
    break
}
}

//Sometimes people have more than 1 brother and sister or combinmation of brothers and sisters
//Ask user to input how many brothers they have.
let howManyBrothers = Number(input.question("How many Brothers do you have? "));
//Use for loop to ask what each brothers information is
for (let i = 0; i < howManyBrothers; i++ ) {
    let brothersName = input.question("What is your Brother's name? ")
    familyMemberNames.push(brothersName);
    let brothersBday = input.question("When is his birthday? ");
    familyMembersBirthdays.push(brothersBday);
if (i > howManyBrothers) {
    break
}
}

//give output a title so user has a clear indication of what they are looking at
console.log("Your families names and birthdays are: ");
console.log("----------------------------------------");
// write a for loop that prints each name on a different line
for (let i = 0; i < familyMemberNames.length; i++) {
    console.log(familyMemberNames[i]);
    console.log(familyMembersBirthdays[i]);
}    
