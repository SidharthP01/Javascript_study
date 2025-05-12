// Create a regexp to search HTML-colors written as #ABCDEF: first # and then 6 hexadecimal characters.

// An example of use:

let regexp = /#[a-f0-9]{6}/gi;

let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";

console.log( str.match(regexp) )  // #121212,#AA00ef