// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

// For example:

// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// More examples in the test cases.

// Good luck!

const arry = [1,6,9,4,3,7,8,2]


const solve = (arry) => {
    let result = [];
    arry.sort((a, b) => a - b);
    while (arry.length) {
        if (arry.length) result.push(arry.pop());
        if (arry.length) result.push(arry.shift());
    }
    return result;
}


console.log(solve(arry))