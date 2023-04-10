// DIRESTIONS
// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.

// Happy coding! :)

// SOLUTION
const longestRepetition = s => {
    let max = 0;
    let char = ''; 
    for (let i = 1, l = s.length, c = 1; i <= l; i++) {
      if (s[i] === s[i - 1]) c++;
      else {
        if (c > max) {
          max = c;
          char = s[i - 1];   
        }
        c = 1;
      }
    }
    return [char, max];
  }
// TESTING
let baseSTR = 'ba'
console.log(longestRepetition(baseSTR))