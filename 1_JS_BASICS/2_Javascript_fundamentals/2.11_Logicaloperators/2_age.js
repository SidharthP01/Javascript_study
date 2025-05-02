// Write an if condition to check that age is between 14 and 90 inclusively.

// “Inclusively” means that age can reach the edges 14 or 90.

// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

let a = Number(prompt("Enter the age"));

if(a >= 14 && a <= 90)
    alert(true);
else
    alert(false);

let b = Number(prompt("Enter the age"));
if(b < 14 || b > 90)
    alert(true);
else
    alert(false);


if(!(a >= 14 && a <= 90))
    alert(true);
else
    alert(false);