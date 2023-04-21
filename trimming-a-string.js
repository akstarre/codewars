// DIRECTIONS
// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// For example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H...", because 1 <= 3

// Requested maximum length will be greater than 0. Input string will not be empty.

// SOLUTION

function trim(str, size) {
   let short = str.split('')
        .filter((letter, i) => i <= (size-1))
        .join('')
    if (str.length < 4){
        return short.concat('...')
    } else if (str.length < size){
        return str
    } else {
        return short.split('')
            .filter((letter, i) => i < (short.length -3))
            .join('')
            .concat('...')
    }
  }

 
  console.log(trim('He', 1))