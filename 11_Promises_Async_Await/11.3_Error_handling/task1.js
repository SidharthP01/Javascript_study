// Error in setTimeout
// What do you think? Will the .catch trigger? Explain your answer.

new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("Whoops!");
  }, 1000);
}).catch(alert);

//answer
//it will not work because of settimeout the promise function executes immediatly but settimout executes seperatly led catch to not get the alert

//correct way is

new Promise(function(resolve, reject) {
    setTimeout(() => {
      reject(new Error("Whoops!"));
    }, 1000);
  }).catch(alert);