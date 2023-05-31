// DIRECTIONS
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0

// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5 
// The most frequent number in the array is -1 and it occurs 5 times.

// SOLUTION
function mostFrequentItemCount(a) {
	var max = 0;
  var arr = new Array();
  for(var i = 0; i <= a.length; i++) {
  	for(var j = 0; j <= a.length; j++) {
    	if (a[i] == a[j]) {
				max+=1;
      }
    }
    arr[i] = max;
    max = 0;
  }
 	max = 0;
  for (var k = 0; k <= arr.length; k++) {
  	if (arr[k] > max) {
    	max = arr[k];
    } 
  }
  if (a.length == 0) {
  	max = 0;
  }
  return max;
}
let arry = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
console.log(mostFrequentItemCount(arry))