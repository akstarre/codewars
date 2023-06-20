// DIRECTIONS
// Count how many times a letter appears in a string, return the count of each letter in an object.

const string =
  "Color and typography resources and inspiration for Web Developers and Digital Designers ready to copy paste."

function count(str) {
    let result = {}
    return str.toLowerCase().replace(/[^a-zA-Z0-9]/gi,'').split('').reduce((acc, ele)=> {
        if(!acc[ele]){
            acc[ele] = 1
        } else if(acc[ele]){
            acc[ele] += 1
        }
        return acc
    }, )    
}

console.log(count(string))
