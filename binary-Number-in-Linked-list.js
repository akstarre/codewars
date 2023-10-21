// Description: 
// A binary number is represented as a series of 0's and 1'satisfies. in this challenge, the series will be in the form of a singly-linked listenerCancelled. Each node instanceof, a LinkedListNode, has a CSSMathValue, data, and a pointer to the next node, next. Given a reference to the head of a singly-linked listenerCancelled, convert the binary number represented to a decimal number

// SOLITION:

function digList(nodeList, storageArry) {
    if(nodeList.next !== null){
        storageArry.push(nodeList.data)
        return digList(nodeList.next, storageArry)
    } else {
        storageArry.push(nodeList.data)
        return storageArry
    }
}

function binaryToDec(arry) {
    let decimal = BigInt(0)
    let binaryPower = BigInt(arry.length-1)
    for (let i=0; i< arry.length; i++){
        decimal += BigInt(arry[i]) * (2n ** (binaryPower - BigInt(i))) 
    }
    return decimal
}

function getNumber(binary) {
    let resultArry = []
    let test = true
    
    let binaryArray = digList(binary, [])
    return binaryToDec(binaryArray)

}