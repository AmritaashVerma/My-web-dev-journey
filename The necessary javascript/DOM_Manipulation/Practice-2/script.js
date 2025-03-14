console.log("Hello!");

let new_ele = document.createElement("button");
new_ele.innerText = "Click me";
new_ele.setAttribute(
  "style",
  "background-color: red; color: white; height: 50px; width: 100px;"
);
let body = document.querySelector("body");
body.prepend(new_ele);

let content = document.querySelector(".para");
// content.setAttribute("class", "newClass"); //this replaces the original class
//to avoid above problem, we use classList

let element = document.querySelector(".para");
element.classList.add("newClass");
