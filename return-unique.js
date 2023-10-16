function returnDuplicates(arr) {
  let unique = []
  let result = []
  for(let i=0; i++; i<arr.length){
    if(!unique.includes(arr[i])){
      unique.push(arr[i])
    } else {
      result.push(arr[i])
      console.log("yo")
    }
  }
  return result
}

let arr1 = [1,1,2,2,2,3,4,5,6,7,8,9]

console.log(returnDuplicates(arr1))