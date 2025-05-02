// Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let student ={};
let stud = new Object();

student.name="Jhon";
student.surname="Smith";

student["name"]="pete";
//student.name="pete";

delete student.name;

for(let key in student)
    alert(student[key]);
