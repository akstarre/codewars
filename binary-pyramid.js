// DIRECTIONS
// Given two numbers m and n, such that 0 ≤ m ≤ n :

// convert all numbers from m to n (inclusive) to binary
// sum them as if they were in base 10
// convert the result to binary
// return as a string

// SOLUTION
function binaryPyramid(m,n){
    let nums = []
    for(let i=m; i<=n; i++){
        nums.push(i)
    }
    let result = nums.map(num => Number(num.toString(2))).reduce((acc, num) => acc+=num).toString(2)

    
    return result
}

console.log(binaryPyramid(1, 4))