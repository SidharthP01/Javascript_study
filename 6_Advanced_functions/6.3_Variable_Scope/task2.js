// The function makeWorker below makes another function and returns it. That new function can be called from somewhere else.

// Will it have access to the outer variables from its creation place, or the invocation place, or both?

function makeWorker() {
  let name = "Pete";

  return function() {
    alert(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?
// Which value it will show? “Pete” or “John”?


//answer
//it will show pete bcoz let is actually block scoped and hence it has local variale it access that other wise it accepts outer  variable