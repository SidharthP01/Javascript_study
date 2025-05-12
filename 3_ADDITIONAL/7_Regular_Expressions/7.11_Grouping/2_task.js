// Find color in the format #abc or #abcdef
// Write a RegExp that matches colors in the format #abc or #abcdef. That is: # followed by 3 or 6 hexadecimal digits.

// Usage example:

let regexp = /#([0-9a-f]{3}){1,2}\b/gi;

let str = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log( str.match(regexp) ); // #3f3 #AA00ef