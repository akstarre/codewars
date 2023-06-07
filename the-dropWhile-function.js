// DIRECTIONS
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// SOLUTION

function testing(anArray){
        return anArray.map((ele, i) => {
            return `${i+1}: ${ele}`
        })
  }

  let arry = ["a", "b", "c"] 

console.log(testing(arry))