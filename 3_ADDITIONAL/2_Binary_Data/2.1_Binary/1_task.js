//concat multiple Uint8Array

function concat(arrays) {
    let totalLength = arrays.reduce((acc, value) => acc + value.length, 0);
    let result = new Uint8Array(totalLength);
    if (!arrays.length) return result;
    let length = 0;
    for (let array of arrays) {
      result.set(array, length);
      length += array.length;
    }
    return result;
  }
  