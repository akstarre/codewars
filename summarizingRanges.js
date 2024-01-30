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
  let set = [];

  for (let i = 0; i < num.length; i++) {
    let current = num[i];
    let next = num[i + 1];
    let previous = num[i - 1];
    let last = num[num.length - 1];

    if (current === next || current + 1 === next) {
      set.push(current);
    } else if (next > current + 1 || current === last) {
      set.push(current);
      let max = Math.max(...set);
      let min = Math.min(...set);
      if (max !== min) {
        result.push(`${min}->${max}`);
        set = [];
      } else {
        result.push(`${max}`);
        set = [];
      }
    }
  }

  return result;
};

let arry1 = [0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7];

console.log(summaryRanges(arry1));
