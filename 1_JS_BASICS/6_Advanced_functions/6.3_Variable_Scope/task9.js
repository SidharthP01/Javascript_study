// We’ve got an array of objects to sort:


// The usual way to do that would be:

// // by name (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// // by age (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Can we make it even less verbose, like this?


// So, instead of writing a function, just put byField(fieldName).

function byField(arg)
{
    return (a,b) => a[arg] > b[arg] ? 1: -1;
}
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  users.sort(byField('name'));
  console.log(users);
  users.sort(byField('age'));
  console.log(users);