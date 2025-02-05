console.log(console) //shows all the console functions
console.error("This is an error") //prints the given text as an error
console.warn("this is a warning") // prints the given text as a warning
console.assert(555>67) //gives error or no error for the condition passed
let obj = {a: 1, b: 2, c: 4};
console.table(obj)
console.info("everything is logged as info except errors and warnings.")
console.clear()
console.table(console)

console.time("for loop"); //to time the program, use the same label for the function
let smth = [2, 40, 62, 70, 80, 90, 100, 20, 30, 40, 50, 60, 10];
let new_num_arr = smth.filter((element) => {
    return element%10 == 0
})
console.log(new_num_arr)
console.timeEnd("for loop");//to time the program

//this is BOM (browser obejct model)
alert("Your script works!!!")
let a = prompt("Enter the value of a")
a = Number.parseInt(a)
alert("You enetered a of type " + (typeof(a)))
let write = confirm("Do you want to write the number you entered on the website?")
if(write == true) {
    document.write(a)
}
else {
    document.write("Please allow me to write the number on the website...")
}

console.table(window) //all the window objects

//this is DOM (document object model)
document.body.style.background = "yellow"; //used when the style property of the web page 
//needs to be changed after a user action as css is not dynamic.

//practice set
//no.1 & no.2
function prompting() {
console.clear()
let age = Number(prompt("What is your age?"))
if (age >= 18) {
    alert("You can drive if you have a liscence!")
}
else if(Math.sign(age) == -1) {
    console.error("The age entered is negative")
}
else {
    alert("You cannot drive!")
}
}
prompting()

//no.2 
let confimation = confirm("Do you want to see the prompt again?")
if (confimation) {
    prompting()
}

//no. 4
function no4() {
    let num = prompt("Enter a number: ")
    if (num>4) {
        location.href = "https://www.google.com/";
    }
}
no4()

//no. 5
let color = prompt("Enter the background color of your website: ")
document.body.style.background = color