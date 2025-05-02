// There’s a tree structured as nested ul/li.

// Write the code that for each <li> shows:

// What’s the text inside it (without the subtree)
// The number of nested <li> – all descendants, including the deeply nested ones.

let a=document.querySelectorAll("li")
for(let i =0 ;i<a.length;i++)
{
    console.log(a[i].firstChild.data)
}

let res =a.length;
console.log(res);