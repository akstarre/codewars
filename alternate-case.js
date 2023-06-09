// DIRECTIONS
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// SOLUTION

function alternateCase(s) {
    return s.split("")
        .map((ele, i) => {
            return s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90 ? ele.toLowerCase() : ele.toUpperCase()
        })
        .join("")
}

const intro = "Hello World"
console.log(alternateCase(intro))
