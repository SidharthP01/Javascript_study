// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

// Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];
let copySorted = arr =>{
    return(
        arr.sort()
    );
}

let sorted = copySorted(arr);
alert( sorted );
alert( arr );