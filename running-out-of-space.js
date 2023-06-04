// DIRECTIONS

// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']

// SOLUTION
function spacey(array){
let result = array.map((str, i) => {
    for (j=0;j<i;j++){
        str = `${array[i-1-j]}${str}`
    }
    return str
})
return result
}

let arry = ["i", "have", "no", "space"]
console.log(spacey(arry))