//@ts-ignore
const prompt = require("prompt-sync")();
const num = Math.floor((Math.random() * 100)/1)
let guess = 0
while (true) {
let num_guess = Number(prompt("Guess the number: "))
if (num == num_guess) {
    console.log("You have guessed the right number!!!")
    console.log("Your score is", 100-guess)
    break;
}
else if (num != num_guess)  {
    console.log(num_guess - num)
    console.log("That is how far away you are from the guess, try again!")
    guess += 1
}
}