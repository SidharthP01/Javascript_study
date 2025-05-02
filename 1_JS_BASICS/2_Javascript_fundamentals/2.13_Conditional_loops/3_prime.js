let n= Number(prompt("Enter a number"));
alert("The prime number between 2 and n are...");
for(let i = 2 ; i<n;i++)
{
    for(let j = 2;j<i;j++)
    {
        if(i%j==0)
            continue
    }
    alert(i);
}