const { whoWon } = require('../RPS.js');

describe('whoWon', function() {
  test("should return 'TIE!' when both players choose the same option", function() {
    expect(whoWon('rock', 'rock')).toBe('TIE!');
    expect(whoWon('paper', 'paper')).toBe('TIE!');
    expect(whoWon('scissors', 'scissors')).toBe('TIE!');
  });

  test("should return 'Player 2 wins!' when Player 2 wins", function() {
    expect(whoWon('rock', 'paper')).toBe('Player 2 wins!');
    expect(whoWon('paper', 'scissors')).toBe('Player 2 wins!');
    expect(whoWon('scissors', 'rock')).toBe('Player 2 wins!');
  });

  test("should return 'Player 1 wins!' when Player 1 wins", function() {
    expect(whoWon('rock', 'scissors')).toBe('Player 1 wins!');
    expect(whoWon('paper', 'rock')).toBe('Player 1 wins!');
    expect(whoWon('scissors', 'paper')).toBe('Player 1 wins!');
  });

  test("should return 'Invalid input!' for invalid inputs", function() {
    expect(whoWon('rock', 'lizard')).toBe('Invalid input!');
    expect(whoWon('spock', 'scissors')).toBe('Invalid input!');
    expect(whoWon('rock', '')).toBe('Invalid input!');
  });
});