// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };



let calculator = {
    read(){
        this.a = +prompt("enter num 1");
        this.b = +prompt("enter num 2");

    },
    sum()
    {
        return (this.a + this.b);
    },
    mul()
    {
        return (this.a * this.b);
    }
}
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );