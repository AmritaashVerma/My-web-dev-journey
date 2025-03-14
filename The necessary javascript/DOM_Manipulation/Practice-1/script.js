// This script has practice questions

// question 1 append text into element

let h1 = document.querySelector("h1").innerText;

document.querySelector("h1").innerHTML = h1 + "from Apna College students";

// question 2 add text to three divs with common class name
// document.querySelectorAll(".box")[0].innerHTML =
//   "<p>Ben Stokes -- Virat Kohli</p>";

for (let i = 0; i < 3; i++) {
  document.querySelectorAll(".box")[i].innerHTML =
    "<button>Ben Stokes -- Virat Kohli</button>";
}
