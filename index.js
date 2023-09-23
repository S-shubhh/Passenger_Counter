let countEl = document.getElementById("count-el")
let SaveEl = document.getElementById("save-el")

let count = 0
function increment()
{
 count+=1
 countEl.textContent = count
}

function save()
{
    let countStr = count + " - "
    SaveEl.textContent+= countStr
    countEl.textContent = 0 
    count = 0
}
//