let str = "Breakfast at 09:00 in the room 123:456.";
let timePattern = /\b\d\d:\d\d\b/;
console.log(str.match(timePattern));  // "09:00"
