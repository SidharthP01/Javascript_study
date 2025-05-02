// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

let checkSpam = (str) => {
  if (str.includes("viagra") || str.includes("xxx")) return true;
};

alert(checkSpam("buy viagra now".toLowerCase()));
alert(checkSpam("free xxxxx".toLowerCase()));
