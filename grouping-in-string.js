// DIRECTIONS
// In this kata you have to find whether same elements of the string are grouped together.

// Example

// Input	Output
// 112233	true
// 11223311	false

// Explanation
// In first example same elements are grouped together: (11)(22)(33), hence it should return true
// In the second example there are two different groups of 1's: (11)2233(11), hence it should return false

// SOLUTION

const isConsecutive = (str) => {
    let result = []
    let arry = str.split('')
    arry.forEach((ele, i) => {
        if(arry[i] !== arry[i+1]){
            result.push(arry.indexOf(ele, (i+1)))
        }
    })
    result = result.sort((a, b) => a -b)
    return result[result.length - 1] > 0 ? false : true
    }

console.log(isConsecutive('112233445511'))

