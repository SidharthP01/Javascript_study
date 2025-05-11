let ended = false;
flyjet.onclick = function () {
  flyjet.addEventListener("transitionend", function () {
    if (!ended) {
      ended = true;
      alert("Done");
    }
  });
  flyjet.classList.add("growing");
};
