// But if we spell it out explicitly like "class Rabbit extends Object", then the result would be different from a simple "class Rabbit"?

// What’s the difference?

// Here’s an example of such code (it doesn’t work – why? fix it?):

class Rabbit extends Object {
  constructor(name) {
    super();  // nees to call the parents constructor
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') );