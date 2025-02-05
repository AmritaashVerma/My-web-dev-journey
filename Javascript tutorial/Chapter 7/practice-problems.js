//no.1 
document.getElementById("first-visual-element").style.backgroundColor = "blue"
document.getElementById("first-visual-element").style.color = "red"

//no. 2 doubt No, did not see table body when viewed page source

// no.3 
let li = document.getElementById("list")
li.firstElementChild.style.backgroundColor = "orange"
li.lastElementChild.style.backgroundColor = "green"

//no. 4
li = document.getElementById("list2")
console.log(li.childNodes)
li.childNodes[1].style.backgroundColor  = "cyan"
li.childNodes[3].style.backgroundColor  = "cyan"
li.childNodes[5].style.backgroundColor  = "cyan"

//no. 5 (d)None of these
