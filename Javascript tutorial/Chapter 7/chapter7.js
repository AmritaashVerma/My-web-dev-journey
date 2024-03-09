//walking the DOM
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
console.log(document.body.childNodes[0])
let arr = Array.from(document.body.childNodes);
console.log(arr)
let a = document.body.firstChild;
console.log(a.parentElement);
console.log(a.firstChild)
console.clear()

//element only navigation

let b = document.getElementById("list")
console.log(document.getElementById("list").childNodes) // will give only the first element node navbar
b.childNodes[1].style.background = "orange" //changed color of first element child in ul
b.childNodes[3].style.background = "white" //second element child of ul
document.getElementById("bout-me").style.color = "blue"
b.childNodes[5].style.background = "green" //last element child of ul

//for table navigation refer to notes 

//actually useful and effiecient way of searching and edting the DOM rest of the methods in notes

//changing the card title color by using the id assigned to the html element

let cardtitle = document.getElementById("firstcardelement")
cardtitle.style.color = "blue"
console.log(document.querySelectorAll(".card-title"))
console.log(document.getElementsByClassName("card-title"))
