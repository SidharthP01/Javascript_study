// Bound function as a method
// importance: 5
// What will be the output?

function f() {
  alert( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();

// answer 
// in function f alert(this) will display null