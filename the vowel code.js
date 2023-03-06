//DIRECTIONS:

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

//SOLUTIONS
function encode(string) {
    let stringy =  string.split('')
       return stringy.map((letter) => {
            if (letter == 'a') {
               return letter = '1'
            } else if(letter == 'e') {
               return letter = '2'
            } else if(letter == 'i') {
               return letter = '3'
            } else if(letter == 'o') {
               return letter = '4'
            } else if(letter == 'u') {
               return letter = '5'
            } else {
                return letter
            }
        })
        .join('')
    
  }
  
  function decode(string) {
    let stringy =  string.split('')
    return stringy.map((letter) => {
         if (letter == '1') {
            return letter = 'a'
         } else if(letter == '2') {
            return letter = 'e'
         } else if(letter == '3') {
            return letter = 'i'
         } else if(letter == '4') {
            return letter = 'o'
         } else if(letter == '5') {
            return letter = 'u'
         } else {
             return letter
         }
     })
     .join('')
  }
//TESTING

console.log(encode('hello'))

console.log(decode('h2ll4'))