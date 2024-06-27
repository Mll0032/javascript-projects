function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}

isPalindrome("Matthew")
console.log(isPalindrome("Mattthew"));
console.log(reverse("Matthew"));