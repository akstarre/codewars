// DESCRIPTIONS
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// SOLUTION
function solution(str, ending) {
    let holding = []
    let found = str.split('').forEach((ele, i) => {
        if (i > (str.length-ending.length-1)) {
            holding.push((str[i]))
        }
    })
    return holding.join('') == ending ? true : false
}

let pstr = 'abc'
let pend = 'bc'

console.log(solution(pstr, pend))
console.log('hello')