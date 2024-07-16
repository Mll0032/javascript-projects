
//populate launcode object
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  //creat a function to check if num is divisible by 2 and 3 and only 2 and only 3 and only 5
  launchOutput: function(num) {
    if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
      return 'LaunchCode Rocks!';
    } else if (num % 2 === 0 && num % 3 === 0 && num % 5 !== 0) {
      return 'LaunchCode!';
    } else if (num % 3 === 0 && num % 5 === 0 && num % 2 !== 0) {
      return 'Code Rocks!';
    } else if (num % 2 === 0 && num % 5 === 0 && num % 3 !== 0) {
      return 'Launch Rocks!';
    } else if (num % 2 === 0 && num % 3 !== 0 && num % 5 !== 0) {
      return 'Launch!';
    } else if (num % 3 === 0 && num % 2 !== 0 && num % 5 !== 0) {
      return 'Code!';
    } else if (num % 5 === 0 && num % 2 !== 0 && num % 3 !== 0) {
      return 'Rocks!';
    } else if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
      return "Rutabagas! That doesn't work.";
    }
  }
};

module.exports = launchcode;

