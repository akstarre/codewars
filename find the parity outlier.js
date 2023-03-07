//Directions
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//MySolution
function findOutlier(integers){
    let test = []
    for (i=0;i<integers.length; i++){
        if (integers[i] % 2 == 0) {
            test.push(integers[i])
        }
    }
    if (test.length > 1) {
        for(i=0;i<integers.length;i++) {
            if (integers[i] % 2 !== 0){
                return integers[i]
            }
        }
    } else {
        for(i=0;i<integers.length;i++) {
            if (integers[i] % 2 == 0){
                return integers[i]
            }
        }
}
}

//Cooler Solution
function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }

//Testing
let ints = [1, 2, 3]
console.log(findOutlier(ints))