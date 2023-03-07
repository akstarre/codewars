//DIRECTIONS:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

//SOLUTION 1 -- Loop not fast enough for larger test, times out. 
// function scramble(str1, str2) {
//     let arry1 = str1.split('')
//     let arry2 = str2.split('')
//     let result = []
   
//     arry2.forEach((letter, i) => {
//         if (arry1.includes(letter)) {
//             arry1.splice(arry1.indexOf(letter), 1)
//             result.push(letter)
//         }
//     })
//     return result.length == arry2.length ? true : false

//   }

//Solution 2
function scramble (str1, str2){
    let arry1 = str1.split('').sort()
    let arry2 = str2.split('').sort()
    let first = arry2[0]
    let last = arry2[str2.length -1]
    arry1 = arry1.slice(arry1.indexOf(first), arry1.lastIndexOf(last))
    return arry1
}

//TESTING
console.log(scramble('rkqodlw',           'world'      )) //true
console.log(scramble('cedewaraaossoqqyt', 'codewars')) //true
console.log(scramble('katas',             'steak'      )) //false
console.log(scramble('scriptjavx',        'javascript' )) //false
console.log(scramble('scriptingjava',     'javascript' )) //true
console.log(scramble('scriptsjava',       'javascripts')) //true
console.log(scramble('javscripts',        'javascript' )) //false
console.log(scramble('jscripts',          'javascript' )) //false
console.log(scramble('aabbcamaomsccdd',   'commas'     )) //true
console.log(scramble('commas',            'commas'     )) //true
console.log(scramble('sammoc',            'commas'     )) //true
