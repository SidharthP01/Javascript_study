// There’s a button in the variable. There are no handlers on it.

// Which handlers run on click after the following code? Which alerts show up?

// button.addEventListener("click", () => alert("1"));

// button.removeEventListener("click", () => alert("1"));

// button.onclick = () => alert(2);


// The first handler triggers, because it’s not removed by removeEventListener. To remove the handler we need to pass exactly the function that was assigned. And in the code a new function is passed, that looks the same, but is still another function.

// To remove a function object, we need to store a reference to it, like this:

function handler() {
  alert(1);
}

button.addEventListener("click", handler);
button.removeEventListener("click", handler);
