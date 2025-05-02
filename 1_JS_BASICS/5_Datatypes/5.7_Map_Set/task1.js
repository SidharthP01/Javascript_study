// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

// function unique(arr) {
//   let res = new Set();
//   for(let val of arr)
//   {
//     res.add(val);
//   }
//   return [...res];
// }


// convert an set to an array

function unique(arr){
    return Array.from(new Set(values));
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) ); 
  