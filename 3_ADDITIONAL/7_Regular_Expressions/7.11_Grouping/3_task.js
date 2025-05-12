// Write a regexp that looks for all decimal numbers including integer ones, with the floating point and negative ones.

// An example of use:

let regexp = /-?\d+(\.\d+)?/g;

let str = "-1.5 0 2 -123.4.";

console.log( str.match(regexp) ); // -1.5, 0, 2, -123.4