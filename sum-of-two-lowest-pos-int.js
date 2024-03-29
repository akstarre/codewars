// INSTRUCTIONS
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//SOLUTION
function sumTwoSmallestNumbers(numbers) {  
    let order = numbers.sort((a,b) => a - b)
    let result = []
    for (i=0;i<2;i++) {
        result.push(order[i])
    }
    return result.reduce(((ele, acc) => acc += ele), 0)
  }

//Solution 2
function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a-b)
    .reduce(((sum, num, i) => {
      if(i < 2) {
        sum += num
      }
      return sum
    }), 0)
  }

//TESTING
let arr1 = [15, 28, 4, 2, 43]
console.log(sumTwoSmallestNumbers(arr1))