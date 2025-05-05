// Find window coordinates of the field
// importance: 5

//outer corner
let coords = elem.getBoundingClientRect();

let answer1 = [coords.left, coords.top];
let answer2 = [coords.right, coords.bottom];

//leftUpper InnerCorner

let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop];

//right bottom inner corner

let answer4 = [
    coords.left + elem.clientLeft + elem.clientWidth,
    coords.top + elem.clientTop + elem.clientHeight
  ];