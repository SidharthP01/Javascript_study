// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let code = prompt("Enter the code");
if(code == 'Admin')
{
    let password= prompt("Enter the password");
    if(password == 'TheMaster')
        alert("Welcome!");
    else if (password == '')
        alert("Cancelled");
    else
        alert("Wrong Password");
}
else if(code == '')
    alert("Cancelled");
else
    alert("I dont know you");
    