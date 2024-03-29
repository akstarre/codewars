// DIRECTIONS
// DESCRIPTION:
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

// Please, keep in mind, that JavaScript is by default sorting objects alphabetically. For more information, please consult:

// http://stackoverflow.com/questions/6093874/why-doesnt-the-sort-function-of-javascript-work-well

// SOLUTION

function flattenAndSort(arry) {
    let result = []
    let sorted = arry.toString().split(',').sort((a, b) => a-b )
    sorted.forEach((ele, i) => {
        if(ele) {
            result.push(Number(ele))
        }
    })
    return result

  }


  let arr1 = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]
  console.log(flattenAndSort(arr1))