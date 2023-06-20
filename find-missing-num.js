// DIRECTIONS
// find the missing number in the Array. The first element is the start and the last element is the end

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];


const findMissingNum = (arr) => {
  for(let i = 0; i<arr.length; i++){
    if(arr[i+1] !== arr[i] + 1){
        return arr[i] + 1
    }
  }
};


console.log(findMissingNum(arr)); // Returns 9, the missing number
