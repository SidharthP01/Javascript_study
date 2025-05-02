// In the code below there’s a setTimeout call scheduled, then a heavy calculation is run, that takes more than 100ms to finish.

// When will the scheduled function run?

// After the loop.
// Before the loop.
// In the beginning of the loop.
// What is alert going to show?

let i = 0;

setTimeout(() => alert(i), 100); // ?


for(let j = 0; j < 100000000; j++) {
  i++;
}

// scheduled function run after completing te loop 
//it gonna show i = 1000000000