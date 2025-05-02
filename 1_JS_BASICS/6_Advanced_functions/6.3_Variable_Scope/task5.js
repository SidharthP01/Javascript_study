// Look at the code. What will be the result of the call at the last line?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();


//answer
// it will show error bcoz sayHi() is declared inside the if