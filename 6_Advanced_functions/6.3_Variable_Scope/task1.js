// The function sayHi uses an external variable nam. When the function runs, which value is it going to use?

let nam = "John";

function sayHi() {
  alert("Hi, " + nam);
}

nam = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

//it shows the name pete because lexical environment either accept the variale if it is inside its block or from te latest outer variable

