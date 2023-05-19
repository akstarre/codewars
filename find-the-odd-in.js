// DIRECTIONS
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// SOLUTION

function findOdd(A) {
    sorted = A.sort((a,b) => a-b)
    let resultCount = []
    let resultNum = []
    let counter = 1
    sorted.forEach((num, i) => {
        if(num == sorted[i+1]){
            counter++
        } else{
            resultCount.push(counter)
            resultNum.push(num)
            counter = 1
        }    
    })
    for (i=0; i<resultCount.length;i++){
        if (resultCount[i] % 2 !== 0){
            return resultNum[i]
        }
    }
  }

  let arry = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
  console.log(findOdd(arry))