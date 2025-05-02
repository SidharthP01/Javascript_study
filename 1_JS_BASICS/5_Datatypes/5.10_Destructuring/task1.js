// We have an object:


// Write the destructuring assignment that reads:

// name property into the variable name.
// years property into the variable age.
// isAdmin property into the variable isAdmin (false, if no such property)


let user = {
    names: "John",
    years: 30
  };

  let {names,years:age,isAdmin = false}=user;
  alert(names);
  alert(age);
  alert(isAdmin);
