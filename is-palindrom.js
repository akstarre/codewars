// DIRECTIONS
// determine whether input string is a palindrom or not

function isPalindrome(str) {
   return str === str.split('').reverse('').join('') ? true : false  
}

console.log(isPalindrome("madam")); // true