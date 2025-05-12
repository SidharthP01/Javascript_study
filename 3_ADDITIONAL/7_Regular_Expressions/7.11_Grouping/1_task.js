// MAC-address of a network interface consists of 6 two-digit hex numbers separated by a colon.

// For instance: '01:32:54:67:89:AB'.

// Write a regexp that checks whether a string is MAC-address.

// Usage:

let regexp = /([0-9a-f]{2}:){5}[0-9a-f]{2}/gi;

console.log( regexp.test('01:32:54:67:89:AB') ); // true

console.log( regexp.test('0132546789AB') ); // false (no colons)

console.log( regexp.test('01:32:54:67:89') ); // false (5 numbers, must be 6)

console.log( regexp.test('01:32:54:67:89:ZZ') ) // false (ZZ at the end)