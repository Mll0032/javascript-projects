const input = require('readline-sync');


function makeLine(size, char = '#'){
    let line = '';
    for (let i = 0; i < size; i++) {
       line += char = '#';    
    }
    return line;
}

function makeSquare(size, char = '#') {
    return makeRectangle(size, size);
}

function makeRectangle(width, height, char = '#') {
    let rectangle = ''
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width, char) + '\n');  
    }
    return rectangle.slice(0, -1);
}

function makeDownwardStairs(height, char = '#') {
    let stairs = '';
    for (let i = 1; i <= height; i++) {
        stairs += makeLine(i, char) + '\n';
    }
    return stairs.slice(0, -1);
}

function makeSpaceLine(numSpaces, numChars, char = '#') {
    let spaces = '';
    for (let i = 0; i < numSpaces; i++) {
        spaces += ' ';
    }
    let hashes = '';
    for (let i = 0; i < numChars; i++) {
        hashes += char;
    }
    return spaces + hashes + spaces;
}

function makeIsoscelesTriangle(height, char = '#') {
    let triangle = '';
    for (let i = 0; i < height; i++) {
       let numSpaces = height - i - 1;
       let numchars = 2 * i + 1;
       triangle += makeSpaceLine(numSpaces, numchars, char = '#') + '\n'; 
}
return triangle.slice(0, -1);
}

function reverseLines(str) {
    return str.split('\n').reverse().join('\n');
}

function makeDiamond(height, char = '#') {
    let topTriangle = makeIsoscelesTriangle(height);
    let bottomTriangle = reverseLines(topTriangle).split('\n').slice(1).join('\n');
    return topTriangle + '\n' + bottomTriangle;
  }
  
function generateShape() {
    let shape = input.question("Choose a shape to generate: \n1. Line\n2. Square\n3. Rectangle\n4. Downward Stairs\n5. Isosceles Triangle\n6. Diamond\n");
    let char = input.question("Enter the character to use for the shape:");
  
    if (char.length !== 1) {
      console.error("Please enter a single character.");
      return;
    }
  
    let size, width, height;
    switch(shape) {
      case '1':
        size = parseInt(input.question("Enter the size of the line: "), 10);
        if (isNaN(size) || size <= 0) {
          console.error("Please enter a valid positive number for the size. ");
        } else {
          console.log(makeLine(size, char));
        }
        break;
      case '2':
        size = parseInt(input.question("Enter the size of the square: "), 10);
        if (isNaN(size) || size <= 0) {
          console.error("Please enter a valid positive number for the size. ");
        } else {
          console.log(makeSquare(size, char));
        }
        break;
      case '3':
        width = parseInt(input.question("Enter the width of the rectangle: "), 10);
        height = parseInt(input.question("Enter the height of the rectangle: "), 10);
        if (isNaN(width) || width <= 0 || isNaN(height) || height <= 0) {
          console.error("Please enter valid positive numbers for the width and height. ");
        } else {
          console.log(makeRectangle(width, height, char));
        }
        break;
      case '4':
        height = parseInt(input.question("Enter the height of the downward stairs: "), 10);
        if (isNaN(height) || height <= 0) {
          console.error("Please enter a valid positive number for the height. ");
        } else {
          console.log(makeDownwardStairs(height, char));
        }
        break;
      case '5':
        height = parseInt(input.question("Enter the height of the isosceles triangle: "), 10);
        if (isNaN(height) || height <= 0) {
          console.error("Please enter a valid positive number for the height. ");
        } else {
          console.log(makeIsoscelesTriangle(height, char));
        }
        break;
      case '6':
        height = parseInt(input.question("Enter the height of the diamond: "), 10);
        if (isNaN(height) || height <= 0) {
          console.error("Please enter a valid positive number for the height.");
        } else {
          console.log(makeDiamond(height, char));
        }
        break;
      default:
        console.error("Invalid choice. Please select a number between 1 and 6. ");
    }
  }
  
  generateShape();
 
//console.log(makeLine(5));
//console.log(makeSquare(5));
//console.log(makeRectangle(5, 3))
//console.log(makeDownwardStairs(5));
//console.log(makeSpaceLine(3,5));
//console.log(makeIsoscelesTriangle(5));
//console.log(makeDiamond(5));