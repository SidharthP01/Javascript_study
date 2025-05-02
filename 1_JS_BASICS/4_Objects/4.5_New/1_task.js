// Is it possible to create functions A and B so that new A() == new B()?

age ={};
function A() {
    return age;
 }
function B() { 
    return age;
}

let a = new A();
let b = new B();

alert( a == b ); // true