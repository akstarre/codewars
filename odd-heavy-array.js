// DESCRIPTION:
// An array is defined to be odd-heavy if it contains at least one odd element and every element whose value is odd is greater than every even-valued element.

// eg.

// Array [11,4,9,2,8] is odd-heavy,
// because its odd elements [11,9] are greater than all the even elements [4,2,8]

// Array [11,4,9,2,3,10] is not odd-heavy,
// because one of its even elements (10 from [4,2,10]) is greater than two of
// its odd elements (9 and 3 from [11,9,3])

// Array [] is not odd-heavy,
// because it does not contain any odd numbers

// Array [3] is odd-heavy,
// because it does not contain any even numbers.

// SOLUTION
function isOddHeavy(n){
    let result = []
    let oddContain = n.find((number) => number % 2 !== 0)
    if (!oddContain){
        result.push(1)
    }
    let sorted = n.sort((a, b) => a - b)
    sorted.forEach((num, i)=> {
        if (num % 2 == 0){
            for(j=0;j < i; j++ ){
                if (sorted[j] % 2 !== 0){
                    result.push(1)
                }
            }
        }
    })
    return result.length > 0 ? false : true
  }

  let arry = [11,4,9,2,3,10]
  console.log(isOddHeavy(arry))

  for(i=0; i++; i<num.length) {
    
  }