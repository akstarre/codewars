//INSTRUCTIONS

// You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.


//SOLUTION
function positiveSum(arr) {
  let result = arr.filter(element => element > 0);
  return result.reduce(((element, cumulator)=> cumulator += element), 0)
}


//TESTING
let arr1 = [1, 2, 3, -4, -6]

console.log(positiveSum(arr1))