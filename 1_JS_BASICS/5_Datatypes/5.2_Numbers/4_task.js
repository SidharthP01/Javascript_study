// This loop is infinite. It never ends. Why?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

// here the loop is infinity because 0.2 is adding with "i" which is a decimal that led to precison loss

let i = 0;
while (i < 11) {
  i += 0.2;
  console.log(i);
}

//we can see there is no number 10 in this loop
