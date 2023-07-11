// DESCRIPTION
// Unfortunately, there's no a .reverse() method for the JavaScript String object.

// Your task is to extend JavaScript String object, so you can reverse strings just like this:

// 'Hello, World!'.reverse();
// The method should return:

// '!dlroW ,olleH'
// SOLUTION

String.prototype.reverse = function() {
    let reversed = '';
    for(let i = this.length - 1; i >= 0; i--) {
      reversed += this[i];
    }
    return reversed;
  };


let str = "Hello World!"
console.log(str.reverse())