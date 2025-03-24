// Write a function count(obj) that returns the number of properties in the object:

function count(obj)
{
    let c=0;
    for(let ele of Object.entries(obj))
        c++;
    return c;
}

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2