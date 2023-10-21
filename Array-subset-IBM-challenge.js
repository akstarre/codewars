//Given an integer array, divide the array into 2 subsets
//a and B while respecting the following:

// The intersetion of A and B is null
// The union A and B is equal to eht original Array
// The number of elements in subset A is minimal
// The sum of A's elements is greater than the sum of B's elements

function subsetA(arr) {
   
    arr.sort((a, b) => b-a)
    let arrA = []
    let arrB = arr
    let totalA = 0
    let totalB = arrB.reduce((a, b) => a+b)
    while (totalA <= totalB) {
        let shifted = arrB.shift()
        arrA.push(shifted)
        totalA += shifted
        totalB -= shifted
        
    }
    return arrA.sort((a,b) => a-b)