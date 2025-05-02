// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.

function sumInput() {
  let arr = [];
  let sum = 0;

  while (true) {
    let res = prompt("Enter a number: ");

    if (res === null || isNaN(res)) {
      break;
    }

    arr.push(Number(res));
  }

  for (let num of arr) {
    sum += num;
  }

  alert(`Total sum: ${sum}`);
}

sumInput();
