// Compare the two code fragments.

// The first one uses finally to execute the code after try...catch:

try {
//   work work
} catch (err) {
//   handle errors
} finally {
//   cleanup the working space
}
// The second fragment puts the cleaning right after try...catch:
try {
//   work work
} catch (err) {
//   handle errors
}

// cleanup the working space

//answer
//in first case even if the try fails it will do the code in finally block
//but in second case its not happens theres no way ,if the try fails there is no chance to execute cleanup process