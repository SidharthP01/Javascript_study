// Rewrite the function using '?' or '||'
// The following function returns true if the parameter age is greater than 18.

// Otherwise it asks for a confirmation and returns its result.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Did parents allow you?');
//   }
// }

function checkAge(age)
{
    let res=(age>18)? alert(true): confirm('Did parents allow you?');
    return res;
}
function checkAgenew(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

let age = checkAge(17);
let newage=checkAgenew(19);
