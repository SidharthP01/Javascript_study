// The call to askPassword() in the code below should check the password and then call user.loginOk/loginFail depending on the answer.

// But it leads to an error. Why?

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'John',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  let logCall = user.loginOk.bind(user);
  let logFail = user.loginFail.bind(user);

askPassword(logCall.loginOk, logFail.loginFail);