// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

function Accumulator(startingValue)
{
    this.startingValue = startingValue;
    this.read = function(){
        this.res= +prompt("enter the num") + this.startingValue;
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.res);