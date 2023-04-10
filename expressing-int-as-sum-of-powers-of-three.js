// DESCRIPTION:
// Problem
// All integers can be uniquely expressed as a sum of powers of 3 using each power of 3 at most once.

// For example:

// 17 = (-1) +   0  + (-9) + 27 = (-1 * 3^0) + ( 0 * 3^1) + (-1 * 3^2) + (1 * 3^3)
// -8 =   1  +   0  + (-9)      = ( 1 * 3^0) + ( 0 * 3^1) + (-1 * 3^2)
// 25 =   1  + (-3) +   0  + 27 = ( 1 * 3^0) + (-1 * 3^1) + ( 0 * 3^2) + (1 * 3^3)
// We can use the string +-0+ to represent 25 as the sum of powers of 3:

// Symbols      :   "+"   "-"   "0"   "+"
// Powers of 3  :    1     3     9    27
// Values       :    1    -3     0    27
// Given an integer n (not necessarily strictly positive), we want to write a function that expresses n as a sum of powers of 3 using the symbols -0+:

// n = 17 -> "-0-+"
// n = -8 -> "+0-"
// Note: The last symbol in the solution string represents the largest power of 3 used (added + or subtracted -) and will never be 0, except if the integer is 0 itself.

// SOLUTION 
function asSumOfPowersOf3(n) {
    if (!n) return "0";
    let r = "";
    while (n) {
      let k = (Number(n % 3n) + 3) % 3;
      r += "0+-"[k];
      if (k == 2) k = -1;
      n = (n - BigInt(k)) / 3n;
    }
    return r;
  }
