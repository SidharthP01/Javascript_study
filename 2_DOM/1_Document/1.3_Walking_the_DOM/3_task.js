let ans = document.body.firstElementChild;
for(let i =0;i<ans.rows.length ;i++)
    {
        let res = ans.rows[i].cells[i]
        res.style.backgroundColor="red"
    }