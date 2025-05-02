// The factorial of a natural number is a number multiplied by "number minus one", then by "number minus two", and so on till 1. The factorial of n is denoted as n!

// We can write a definition of factorial like this:

// n! = n * (n - 1) * (n - 2) * ...*1

function factorial(n)
{
    if (n == 0 || n == 1)
        return n;
    else
        return n * factorial(n-1);
}
console.log(factorial(5));