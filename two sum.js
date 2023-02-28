//DIRECTIONS:
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: http://oj.leetcode.com/problems/two-sum/

//SOLUTION
//PREP
// Find indexes in a given array, whos value's add up to the target number. 
//Parameters: numbers will be whole numbers. 
//Return: Return the indexes of the numbers that add up to the target 

function twoSum(numbers, target) {
    let result = []
    numbers.forEach((element, index) => {
        for (i=0;i<numbers.length;i++){
            if(index !== i && result.length < 2) {
                if(element + numbers[i] == target) {
                    result.push(index)
                    result.push(i)
                }
            }
        }
    })
    return result
  }

//Example: 
let nums = [-629, -93, -804, 583, -879, -755, -196, -285, 293, -115, 670, -983, 316, 582, -502, 67, -815, 612, -149, -498, -271, -399, -624, 464, -814, 550, 633, -690, -923, 828, 335, -442, 304, -634, -176, 945, -283, 988, -834, -594, 801, -2, 143, -492, -703, -19, -884, -908, 83, -452, 519, -206, 158, -755, -365, 735, -898, 189, -17, -620, -635, 81, -440, -195, -54, -382, -938, 926, 339, 362, -68, 823, 995, 415, 786, 503, 707, -973, -957, -954, 766, -533, 307, 751, -544, -837, 689, 690, 913]
let targ = 410
console.log(twoSum(nums, targ)) //should return [1, 75]


