// DIRECTIONS
// Find the highest and lowest value in an array and return as object. 

const arr = [1, 2, 3, 4, 100];
const findMaxMin = (arr) => {
    return arr.reduce((acc, ele) => {
        if(ele > acc.max){
            acc.max = ele
        } else if (ele < acc.min){
            acc.min = ele
        }
        return acc
    }, { max: arr[0], min: arr[0]})
};


console.log(findMaxMin(arr)); // Returns object { "max": 100, "min": 1 }
