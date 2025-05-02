// Let’s try 5 array operations.

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

let musics = ["Jazz", "Blues"];
musics.push("Rock-n-Roll");
musics[1] = "Classics";
alert(musics[0]);
musics.unshift("Reagge");
musics.unshift("Rap");
