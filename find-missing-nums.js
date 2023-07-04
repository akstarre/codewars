// DESCRIPTION:

// Given an array with a minimum, maximum and values in between. Find the numbers missing from the array.

// SOLUTION

function missing(arry) {
    let result = []
    arry.sort((a, b) => a -b)
    for(let i = arr[0] + 1; i < arr[arr.length-1]; i++){
        if(!arry.includes(i)){
            result.push(i)
        }
    }
   return result
}

arr = [5, 1]
console.log(missing(arr))