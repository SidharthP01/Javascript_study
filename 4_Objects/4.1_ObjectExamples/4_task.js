// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };


function multiplyNumeric(obj)
{
    for(let key in obj)
    {
        if(typeof(obj[key]) == 'number')
        {
            obj[key] *=2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  multiplyNumeric(menu);
  console.log(menu);