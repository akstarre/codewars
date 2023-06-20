// DIRECTIONS
// return an array with each value the cumulative sum of all the elements 

let arr = [1, 3, 5, 7];
const cumulativeSum = (list) => {
    let result = [list[0]]
    list.reduce((acc, ele) => {
        acc += ele
        result.push(acc)
        return acc
    })
    return result
};

console.log(cumulativeSum(arr)); // Returns [1, 4, 9, 16]
