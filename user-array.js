// DIRECTIONS
// Given an array of objects with id and score properties.Return the id associated with the larges score.DIRECTIONS

// SOLUTION

function getWinner(arr){
    return arr.reduce((acc, ele) => {
        if (ele.score > acc.score){
            acc = ele
        }
        return acc
    }, arr[0]).id
}

let users = [
    { id: 1, score: 47 }, 
    { id: 2, score: 18 }, 
    { id: 3, score: 24 }, 
    { id: 4, score: 36 }, 
    { id: 5, score: 42 }, 
    { id: 6, score: 55 },]
console.log(getWinner(users))

