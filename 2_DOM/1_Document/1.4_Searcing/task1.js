// The table with id="age-table".
// All label elements inside that table (there should be 3 of them).
// The first td in that table (with the word “Age”).
// The form with name="search".
// The first input in that form.
// The last input in that form.


//1
document.getElementById("age-table");
//2
document.getElementsByTagName("label");
//3
document.querySelectorAll("td")[0];
//4
let form = document.getElementsByName('search')[0]
//5
document.getElementsByTagName('input')[0];
document.querySelectorAll('input')[0];
//6
let a = document.querySelectorAll('input');
let len = a.length;
document.querySelectorAll('input')[len];
