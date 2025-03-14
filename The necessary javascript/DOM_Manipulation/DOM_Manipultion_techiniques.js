let title = document.getElementById("first-heading");
console.dir(title); // prints out the element that has this ID, ID is always unique to each element

let elements_inclasses = document.getElementsByClassName("myClass");
console.dir(elements_inclasses); //prints out HTML collection that has all elements having this class

let button = document.getElementsByTagName("button");
console.dir(button); //prints out all the button tags in a HTML collection

//HTML collection is just like an array.

// A better way to do all the things above queryselector works for id, classes and tag names.

let firstele = document.querySelector("p"); //returns the first instance of that element
console.dir(firstele);

let all_ele = document.querySelectorAll("p"); //returns all the instances of that element
console.dir(all_ele);

let queryIds = document.querySelector("#first-heading"); // use # for ID
console.dir(queryIds);

let queryclasses = document.querySelectorAll(".myClass"); // use . for Class name
console.dir(queryclasses);

// Properties

console.log(firstele.tagName); // returns tag name of given element

let fruit_list = document.querySelector("#fruit-list").innerText; // returns the text in given element
console.dir(fruit_list);

let fruit_list2 = document.querySelector("#fruit-list").innerHTML; // returns the html in the given element
console.dir(fruit_list2);

document.querySelector("#fruit-list").innerHTML =
  "<div><p>This is the new text in the document</p></div>"; // this is how you can change the HTML from javascript, works with all properties

//   Attributes
let heading = document.querySelector("#first-heading");
console.log(heading.getAttribute("id")); //gives the attributes of an element
// heading.setAttribute("style", "background-color: red"); sets the value of a new or existing attribute

// Style

let div = document.querySelector("#box");
console.dir(div.style); // this acceses the styling in the html elements, we can change them in the folloing way by element.style.style-name
div.style.backgroundColor = "purple";
div.style.color = "white";

// creating a new element
let el = document.createElement("button");
el.innerText = "Click me!";
console.log(el.innerText);

// adding it to the DOM
let box_div = document.querySelector("#box");
// box_div.append(el); // adds the element at inside the end of the given node
// box_div.prepend(el); // adds the element at inside and of the start of the given node
// box_div.before(el); // adds the element outside and before the given node
box_div.after(el); // adds the element outside and after the given node
