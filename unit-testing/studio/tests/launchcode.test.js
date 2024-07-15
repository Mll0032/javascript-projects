// launchcode.test.js code:
const launchcode = require('../index.js');

describe('launchcode object', function() {
  // Write your unit tests here!
  it("should have an 'organization' property with value 'nonprofit'", function() {
    expect(launchcode.organization).toBe('nonprofit');
  });
  it("should have an 'executiveDirector' property with value 'Jeff'", function() {
    expect(launchcode.executiveDirector).toBe('Jeff');    
  });
  it("should have a 'percentageCoolEmployees' property with value 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  it("should have a 'programsOffered' property with correct array values", function() {
    expect(launchcode.programsOffered).toEqual(["Web Development", "Data Analysis", "Liftoff"]);
  });
  describe('launchOutput method', function() {
    it("should return 'Launch!' when passed a number only divisible by 2", function() {
      expect(launchcode.launchOutput(2)).toBe('Launch!');
      expect(launchcode.launchOutput(4)).toBe('Launch!');
    });
  })
  it("should return 'Code!' when passed a number only divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toBe('Code!');
    expect(launchcode.launchOutput(9)).toBe('Code!');
  });
  it("should return 'Rocks!' when passed a number only divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
    expect(launchcode.launchOutput(25)).toBe('Rocks!');
  });
  it("should return 'LaunchCode!' when passed a number divisible by both 2 and 3", function() {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
    expect(launchcode.launchOutput(12)).toBe('LaunchCode!');
  });
  it("should return 'Code Rocks!' when passed a number divisible by both 3 and 5", function() {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
    expect(launchcode.launchOutput(45)).toBe('Code Rocks!');
  });
  it("should return 'Launch Rocks!' when passed a number divisible by both 2 and 5", function() {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
    expect(launchcode.launchOutput(20)).toBe('Launch Rocks!');
  });
  it("should return 'LaunchCode Rocks!' when passed a number divisible by 2, 3, and 5", function() {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
    expect(launchcode.launchOutput(60)).toBe('LaunchCode Rocks!');
  });
});



//trying to use an arrow
// describe("Testing launchcode", () => {
//   Write your unit tests here!
//   it("should have an 'organization' property with value 'nonprofit'", () => {
//     expect(launchcode.organization).toBe('nonprofit');
//   });
// });
  
  
