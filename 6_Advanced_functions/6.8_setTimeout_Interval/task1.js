// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

function printNumbers(from,to)
{
    let curr = from;
    const timerId = setInterval(()=>{
        console.log(curr);
        if(curr == to)
            clearTimeout(timerId);
        curr++;
    },1000);
}

printNumbers(1,10);

