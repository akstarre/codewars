// DIRECTIONS
// Find the first number that more than once

const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
// const findDupe = (arr) => {
//     for(let i = 0; i<arr.length; i++){
//         if (arr[i] === arr[i+1]){
//             return arr[i]
//         }
//     }
// };

//find the number that first repeats
const findDupe = (arr) => {
    for(let i = 0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i] === arr[j]){
                return arr[i]
            }
        }
    }
};

console.log(findDupe(arr)); // Returns 7
