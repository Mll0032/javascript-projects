//Refactpr this funtion to make it anonumous

function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
  }
  
  console.log(reverse("LaunchCode"));

  let reverseTwo = function(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverseTwo();
    return reversedLettersArray.join('');
  }