//INSTRUCTIONS
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//SOLUTION
function getCount(str) {
    let checkList = ["a", "e", "i", "o", "u"]
    let strArry = str.split("")
    let result = []
    for(i=0;i<strArry.length;i++){
        if(checkList.indexOf(strArry[i])> -1){
            result.push(strArry[i])
        }
    }
    return result.length;
  }
//TESTING
 let tests = "abracadabra"
 console.log(getCount(tests))
