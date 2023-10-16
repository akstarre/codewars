// DIRECTIONS

// return the index of the first unique character in a string

const str1 = "Racecars are faster"

function unique(str){
    let dupes = []
    let result = []
    let strArray = str.split("")
    strArray.forEach((letter, i) => {
        for (let j= i+1; j<str.length; j++){
            if (letter === str[j]){
                dupes.push(letter)
            }
        }
    })
    result = strArray.filter((letter) => !dupes.includes(letter))
    return str.indexOf(result[0])
}

console.log(unique(str1))