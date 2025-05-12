// How to find an ellipsis "..." ?
// importance: 5
// Create a regexp to find ellipsis: 3 (or more?) dots in a row.

// Check it:

let regexp = /\.{3,}/g;
console.log( "Hello!... How goes?.....".match(regexp) ); // ..., .....