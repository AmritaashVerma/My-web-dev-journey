//variables and data types in javascript

console.log("This is the variables and data types tutorial")

let a1 = 69 // a contains 69
console.log(a1)
let b1 = "Amritaash" // b contains Amritaash
console.log(b1)

// diffferences between var, let and const

let a = "hello"; //The value of this variable can only be changed in block scope but can't be redeclared globally
a = "no go pls no";//value of let variable can be changed using this
a = "hey";//value of let variable can be changed using this
var b = "person"; //The value of this variable can be changed in the whole program
const c = "This is it for variables in javascript"; //The value of this variable can not be changed in the whole program  
console.log(a);
console.log(b);
console.log(c);
{
  let a = "Test";
  console.log(a)
  const c = "Another test";
  console.log(c)
}
console.log(a)
//primitive data types 
//nn bb ss u
let a3 = null;
let b3 = 645;
let c3 = BigInt("163813618") + BigInt("2");
let d3 = true;
let e3 = "String";
let f3 = Symbol("This is a symbol");
let g3 = undefined
console.log(a3, b3, c3, d3, e3, f3, g3)
console.log(typeof d3);

const item = {
  ["Amritaash"]: true, 
  ["Age"]: 15,
  ["Gender"]: "Male",
  ["Rahul"]: "Naam toh suna hee hoga", 
  ["Joginder"]: undefined
}
console.log(item["Amritaash"]);

//practice set chapter 1


//1. create a variable of type string and try to add a number to it
let variable ="String";
variable = variable + 9;
console.log(variable);

//2. use typeof operator to find the datatype of the string in last question

let a2 = "This is a string";
console.log(typeof (a2+90));//It will still return string

//3. create a const object in javascript can you change it to hold a number later ans. NO
const object = {
  name: "Amritaash Verma",
  age:  15, 
  gender: "Male"
};
//const object = "rubbish"; 

//4. try to add a new key to the const object in problem 3 were you able to do it? yes
object["newname"] = "Rahul";
console.log(object["newname"]);

//5. write a js program to create a word-meaning dictionary of 5 words
const new_dict = {
  ["Condemn"]: "Express complete disapproval", 
  ["Intelligent"]: "A person with extraordinary brain power",
  ["blasphemy"]: "profane talk",
  ["profane"]: "secular rather than religious",
  ["Secualrism"]: "Not favouring any knid of religion and treating all religions equally."
}

console.log(new_dict["Intelligent"])