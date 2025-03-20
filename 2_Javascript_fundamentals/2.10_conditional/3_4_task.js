// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));

let result = (a+b <4) ? "Below" : "Over";
alert(result);

let login = prompt("Enter your Role? ");

let message= (login == 'Employee')? "hello" : (login == 'Director')? "Greetings": (login == '')? "No login": '';
alert(message);