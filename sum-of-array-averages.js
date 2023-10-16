
const arry = [[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]


const sumAverage = (arry) => {
    return Math.floor(arry.map((arry) => arry.reduce((acc, num)=> acc += num) / arry.length).reduce((acc, ave) => acc += ave))
}

console.log(sumAverage(arry))