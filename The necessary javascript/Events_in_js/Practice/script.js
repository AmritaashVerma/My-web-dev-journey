// making a button to change light to dark and vice versa
let butn = document.querySelector("#mode");
let bod = document.querySelector("body");
let curr_mode = "light";
const mode_change = () => {
  if (curr_mode == "light") {
    curr_mode = "dark";
    console.log(curr_mode);
    bod.setAttribute("class", "dark-mode");
    butn.innerText = "light mode";
  } else {
    curr_mode = "light";
    console.log(curr_mode);
    bod.setAttribute("class", "light-mode");
    butn.innerText = "dark mode";
  }
};

butn.addEventListener("click", mode_change);
