// What will be the result of this code?

let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();

//answer
//it will show error bcoz it cannot access x inside the function