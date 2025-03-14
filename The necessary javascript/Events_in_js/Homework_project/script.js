let div1 = document.querySelector(".first_ele");
let div2 = document.querySelector(".second_ele");
let curr_class = "first_class";

const switcher = () => {
  //mouse carries good, so if mouse hover over bad then it becomes good and vice versa
  if (curr_class == "first_class") {
    curr_class = "second_class";
    div1.setAttribute("class", "second_ele");
    div2.setAttribute("class", "first_ele");
  } else if (curr_class == "second_class") {
    curr_class = "first_class";
    div1.setAttribute("class", "first_ele");
    div2.setAttribute("class", "second_ele");
  }
};

div2.addEventListener("mouseover", switcher);
div1.addEventListener("mouseover", switcher);
