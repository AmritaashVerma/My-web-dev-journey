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
