//Write a function printList(list) that outputs list items one-by-one.
  
//   Make two variants of the solution: using a loop and using recursion.
  
//   What’s better: with recursion or without it?



let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

  
  function printListRec(list)
  {
    console.log(list.value);
    if(list.next)
      printListRec(list.next);
  }
  
  function printListitr(list) {
    let temp = list;
  
    while (temp) {
      console.log(temp.value);
      temp = temp.next;
    }
  
  }