// The elem.scrollTop property is the size of the scrolled out part from the top. How to get the size of the bottom scroll (let’s call it scrollBottom)?

// Write the code that works for an arbitrary elem.



let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

// full height) minus (scrolled out top part) minus (visible part) – that’s exactly the scrolled out bottom part.