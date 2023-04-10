// DIRECTIONS
// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

// SOLUTION


// function toUnderscore(string) {
//     if (!isNaN(string))
//       return string;
      
//     var charArr = string.split('');
    
//     var snakeWord = '';
//     for (var i=0; i<charArr.length; i++) {
//       snakeWord += charArr[i].toLowerCase();
//       if (i+1 < charArr.length) {
//         if (isNaN(charArr[i+1]) && charArr[i+1] === charArr[i+1].toUpperCase()) {
//           snakeWord += '_';
//         }
//       }
//     }
//     return snakeWord;
//   }