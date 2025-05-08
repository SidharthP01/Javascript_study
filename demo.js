console.log("A");
let pro = new Promise((resolve,reject) => reject("Error"));

pro.then((value) =>{
    console.log(value);
}).catch((err) => console.log(err));
console.log("C");