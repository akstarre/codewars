// DIRECTIONS
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// SOLUTION
function stray(numbers) {
    let sorted = numbers.sort((a,b) => a-b )
    let last = numbers.length -1
    if (numbers[0] !== numbers[1]){
        return numbers[0]
    }
    if (numbers[last] !== numbers[1]){
        return numbers[last] 
    }
  }