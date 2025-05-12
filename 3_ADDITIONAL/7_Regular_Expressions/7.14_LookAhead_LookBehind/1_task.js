// Find non-negative integers
// There’s a string of integer numbers.

// Create a regexp that looks for only non-negative ones (zero is allowed).

// An example of use:

let regexp = /(?<![-\d])\d+/g;

let str = "0 12 -5 123 -18";

console.log( str.match(regexp) ); // 0, 12, 123