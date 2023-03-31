// DESCRIPTION
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// SOLUTION

function towerBuilder(nFloors) {
    let tower = []
    for(i=nFloors; i>0; i--){
      let floor = []
      for(j=0; j<(i * 2 - 1); j++){
        floor.push('*')
      }
      if (tower[0]){
        while(tower[0].length > floor.length){
            floor.unshift(' ')
            floor.push(' ')

        }
      }
      tower.unshift(floor.join(''))
      
    }
    return tower
  }


// TESTING

console.log(towerBuilder(6))
