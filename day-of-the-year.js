// DESCRIPTION:
// DESCRIPTION:
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
// SOLUTION
function problem(x){
    if (typeof(x) == String){
        return 'Error'
    }
    return (Number(x) * 50) + 6
  }
  let val = 2
  console.log(problem(2))