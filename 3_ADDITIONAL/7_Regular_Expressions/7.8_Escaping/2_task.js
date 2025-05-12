// The time can be in the format hours:minutes or hours-minutes. Both hours and minutes have 2 digits: 09:00 or 21-30.

// Write a regexp to find time:

let regexp = /\d\d[:-]\d\d/g;
console.log( "Breakfast at 09:00. Dinner at 21-30".match(regexp) ); // 09:00, 21-30