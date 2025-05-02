// For each of the following, give at least one way of how to access them:

// The <div> DOM node?
// The <ul> DOM node?
// The second <li> (with Pete)?

let ans1 = document.body.firstElementChild;
let ans1_1=document.body.children[0];

let ans2 = document.body.lastElementChild;
let ans2_2 = document.body.children[1];

let ans3= document.body.lastElementChild.lastElementChild;
console.log(ans1);