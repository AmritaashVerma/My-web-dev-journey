console.log("This is chapter 4 of the ultimate javascript course.")

//string interpretation
let new_name = "Amritaash Verma"//can also be executed with '' 
console.log(new_name.length) //prints the length of the name 

// `` (backtiks) can also be used to declare strings and allows us to use quotes in them
console.log(`The name of the person following this course is ${new_name}`)
// this will print the sentence with varible new name in it and this is called string interpolation

//escape sequence characters

new_name = 'Murphy\'s law' //in this we can ignore the single quote apostrophe and execute the string as normal
console.log(new_name)
console.log("This is sentece and, \n this will print in a new line.")
console.log("This is a sentence and \t this will insert a tab in between.")
console.log("This is a sentence and \r the previous words will be deleted.")

//string properties and methods

let name1 = "amritaash"
console.log(name1.length, "is the length of my name")
console.log(name1.toUpperCase(), "is my name in all capital letters")
name1 = "AmRiTaaSH"
console.log(name1.toLowerCase(), "is my name in all small letters")

// string slicing

name1 = "Amritaash Verma"

console.log(name1.slice(2, 4), "prints from index 2 to 4")
console.log(name1.slice(0), "prints from index 0 to end")


let newname = name1.replace("A", "a")
console.log(newname, "replace A with a")

let c1 = "Jai"
let c2 = " Shree "
let c3 = "Ram!"

console.log(c1 + c2 + c3)
//or 
console.log(c1.concat(c2, c3))

let r = c1 + c2 + c3

console.log(r.trim()) //removes the whitespaces but this didn't work 

//to access string elements we use the normal indexing method
// strings are immutable

console.log(r.slice(10))
console.log(r[10])

//practice set
//1 
console.log("har\"".length, "will return 4")

//2 

//includes function tells if a given string is here in another string
console.log(r.includes("Ram!")) // true
//starts with function tells if a string starts with the given string or not 
console.log(r.startsWith("Jai")) // true
//ends with function tells if a string ends with the given string or not
console.log(r.endsWith("Ram!")) //true

let smth = "THIS IS A SENTENCE TO BE CONVERTED TO ALL SMALL";
smth = smth.toLowerCase();
console.log(smth)

//extracting thte value from string
smth = "Please give 1000 rupees.";
console.log(smth.slice(12, 16))


console.log("something dammmit")