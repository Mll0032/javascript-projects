const checkFive = require('../checkFive');

describe('checkFive', function() {
  test("should return '2 is less than 5.' when passed a number less than 5", function() {
    let output = checkFive(2);
    expect(output).toBe("2 is less than 5.");
  });

  test("should return '6 is greater than 5.' when passed a number greater than 5", function() {
    let output = checkFive(6);
    expect(output).toBe("6 is greater than 5.");
  });

  test("should return '5 is equal to 5.' when passed the number 5", function() {
    let output = checkFive(5);
    expect(output).toBe("5 is equal to 5.");
  });
});