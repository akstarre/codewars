const getLargeNumbers = (a, b) => {
    let result = []

    for (let i=0; i<= a.length-1; i++){
        if (a[i] >= b[i]){
            result.push(a[i])
        } else {
            result.push(b[i])
        }
    }
return result
}

    let a = [13, 64, 15, 17, 88]
    let b = [23, 14, 53, 17, 80]

console.log(getLargeNumbers(a, b))