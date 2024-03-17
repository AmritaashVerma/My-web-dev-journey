let a = document.getElementById("learnable")
// note- id names can be directly used as element nodes.
console.log(a.innerHTML) //prints only the inner part of the given element. Works for only element nodes
console.log(a.outerHTML) //prints the whole element
a.innerHTML = "This ain't Lorem." // changes the inner/outer html tags can also be added
// a.outerHTML = "<span id='first'>This is a new span</span>" // changes the inner/outer html
first = document.getElementById("first")
console.log(first.textContent) //gives all the text in the element
// first.hidden = true //used for hiding an element
console.clear()
console.log(a.getAttribute("class"))
a.setAttribute("class", "something else")
// insertion methods (main way)
let div = document.createElement('div')
div.innerHTML = "<h1>This is inserted</h1>"
a.append(div) //used to add after the given element
a.prepend(div)//used to add before the given element
a.before(div) //puts the element before the parent node
a.after(div) //puts the element after the parent node


//insertion can also be performed like this
a.innerHTML = a.innerHTML + "<h1>This is inserted using innerHTML</h1>"