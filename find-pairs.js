// DIRECTIONS
// find the pair of numbers that add up to the target in the array

let arr = [1, 5, 6, 2, 10, 3];
const findSumPairs = (arr, value) => {
    let result = []
    for(let i = 0; i < arr.length; i++){
        for(let j=i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === value && result.length < 2){
                result.push(arr[i])
                result.push(arr[j])
            }
        }
    }
    return result
};
console.log(findSumPairs(arr, 16));
