//INSTRUCTIONS

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//SOLUTION
function arrayDiff(aRay, bRay){
    let result = []
    for (i=0;i<aRay.length;i++) {
        if(bRay.indexOf(aRay[i])){
            result.push(aRay[i])
        }
    }
    return result
}
//TESTING
let arr1 = [1,2, 2]
let arr2 = []

console.log(arrayDiff(arr1, arr2))