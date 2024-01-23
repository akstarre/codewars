// Driections:
// Given a sorted array of numbers, return the summary of its ranges.

// summaryRanges([1, 2, 3, 4]) === ["1->4"]
// summaryRanges([1, 1, 1, 1, 1]) === ["1"]
// summaryRanges([0, 1, 2, 5, 6, 9]) === ["0->2", "5->6", "9"]
// summaryRanges([0, 1, 2, 3, 3, 3, 4, 5, 6, 7]) === ["0->7"]
// summaryRanges([0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10]) === ["0->7", "9->10"]
// summaryRanges([-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12]) ===["-2", "0->7", "9->10", "12"]

//Solutions:
const summaryRanges = (num) => {
  let result = [];
  let current = [];
  for (let i = 0; i < num.length; i++) {
    if (num[i] === num[i + 1] || num[i] + 1 === num[i + 1]) {
      current.push(num[i]);
    } else if (num[i + 1] > num[i] + 1 || num[i] === num[num.length - 1]) {
      current.push(num[i]);
      let max = Math.max(...current);
      let min = Math.min(...current);

      if (max !== min) {
        result.push(`${min}->${max}`);
        current = [];
      } else {
        result.push(`${max}`);
        current = [];
      }
    } else if (num[i] === num[num.length - 1]) {
      if (num[i] !== num[i - 1] || num[i] - 1 !== num[i - 1]) {
        result.push(`${num[i]}`);
      }
    }
  }

  return result;
};

let arry1 = [0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7];

console.log(summaryRanges(arry1));
