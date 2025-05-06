// Why "return false" doesn't work?
// importance: 3
// Why in the code below return false doesn’t work at all?

// <script>
//   function handler() {
//     alert( "..." );
//     return false;
//   }
// </script>

// <a href="https://w3.org" onclick="handler()">the browser will go to w3.org</a>

// answer


  function handler() {
    alert("...");
    return false;
  }

<a href="https://w3.org" onclick="return handler()">w3.org</a>