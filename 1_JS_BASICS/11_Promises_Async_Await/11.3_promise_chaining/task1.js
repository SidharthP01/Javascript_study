
// Promise: then versus catch
// Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

promise.then(f1).catch(f2);

promise.then(f1, f2);

//answer

//they are both different
/*in first case when an error occured in f1 its resolved by catch)
but in second case there is no way to resolve the error */