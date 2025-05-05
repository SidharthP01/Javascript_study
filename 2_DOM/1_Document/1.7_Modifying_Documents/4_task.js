do{
    let ip1 = document.getElementById('ip');
    let a = prompt("Enter the Element");
    if (a === null || a === '') break;
    let li = document.createElement('li');
    li.innerHTML = a;
    ip1.append(li);
}while(true);
