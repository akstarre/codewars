// DIRECTIONS
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// SOLUTION

function count(string) {
    return string.split('').reduce(function (counts, char) {
        counts[char] = (counts[char] || 0) + 1;
        return counts;
    }, {});
}

// TESTING

console.log(count('abbac'))