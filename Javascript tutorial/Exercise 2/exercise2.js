let computer_points = 0
let human_points = 0
for (let i = 0; i<3; i++) {
let response = prompt("What would you like to choose? Snake(s), Water(w) or gun(g)?")
let options = ["s", "w", "g"];
let index = Math.floor(Math.random() * options.length)
const comp_response = options[index]
alert(comp_response)
if (response == comp_response) {
    alert("Its a draw")
}
if (response == "s" && comp_response == "g" || response == "g" && comp_response == "w" || response == "w" && comp_response == "s") {
    alert("The computer gets 1 point")
    computer_points += 1
}
if (response == "s" && comp_response == "w" || response == "g" && comp_response == "s" || response == "w" && comp_response == "g") {
    alert("You get 1 point.")
    human_points += 1
}
}

alert("The points of the human were: " + human_points + " and the points of the computer were: " + computer_points)
if (computer_points > human_points) {
    alert(" The computer won!")
}
else if(computer_points == human_points) {
    alert("It's a draw!")
}
else {
    alert(" You won!!!")
}