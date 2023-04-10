// Description:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//Solutions
function duplicateCount(text) {
    let test = text.toLowerCase().split('').sort()
    let result = []
    for (i=0;i<test.length;i++) {
        if (test[i] == test[i+1] && !result.includes(test[i])){
            result.push(test[i])
        }
    }
   

    return result.length
}

//Tests

let letters = "abbccdee"
console.log(duplicateCount(letters))



