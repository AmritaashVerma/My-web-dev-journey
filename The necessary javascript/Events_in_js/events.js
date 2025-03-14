// All the events are given in these docs - https://developer.mozilla.org/en-US/docs/Web/Events
let thingy = document.querySelector("#should");
// node.event_name = () => {} is the syntax for event occurence, not very reliable
thingy.onmousedown = () => {
  console.log("bc");
  thingy.setAttribute("style", "background-color: blue");
};

let div = document.querySelector("#would");

div.onmouseover = () => {
  console.log("POLS AGAYI POLS");
};

// below is the preferred method of event listening and execution
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

const funcky = (/*event object can come here*/) => {
  console.log("Funcky ka dunky");
  btn1.removeEventListener("click", funcky); //removes event listener after execution of event
};

const munky = () => {
  console.log("jalwa hai hamara");
  for (let i = 0; i < 10; i++) {
    console.log("MUnni badnaam hui darling tere liye.");
  }
  btn2.removeEventListener("click", munky);
};

btn1.addEventListener("click", funcky);
btn2.addEventListener("click", munky);
