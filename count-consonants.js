// DESCRIPTION:
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

// SOLUTION
function consonantCount(str) {
    const consonants = 'bcdfghjklmnpqrstvwxyz'
    let counter = 0
    str.toLowerCase().split('').forEach(letter => {
        if ((consonants.indexOf(letter) !== -1)) {
            counter++
        }
    })
    return counter
}

console.log(consonantCount('aeiou AEIOU'))