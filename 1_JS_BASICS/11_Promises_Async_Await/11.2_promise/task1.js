// What’s the output of the code below?

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

//answer
//it will print 1 because second resolve is avoided , a promise function will only give either resolve or reject