//variables and data types in javascript

console.log("This is the variables and data types tutorial");

let a1 = 69; // a contains 69
console.log(a1);
let b1 = "Amritaash"; // b contains Amritaash
console.log(b1);

// diffferences between var, let and const

let a = "hello"; //The value of this variable can only be changed in block scope but can't be redeclared globally
a = "no go pls no"; //value of let variable can be changed using this
a = "hey"; //value of let variable can be changed using this
var b = "person"; //The value of this variable can be changed in the whole program
const c = "This is it for variables in javascript"; //The value of this variable can not be changed in the whole program
console.log(a);
console.log(b);
console.log(c);
{
  let a = "Test";
  console.log(a);
  const c = "Another test";
  console.log(c);
}
console.log(a);
//primitive data types
//nn bb ss u
let a3 = null;
let b3 = 645;
let c3 = BigInt("163813618") + BigInt("2");
let d3 = true;
let e3 = "String";
let f3 = Symbol("This is a symbol");
let g3 = undefined;
console.log(a3, b3, c3, d3, e3, f3, g3);
console.log(typeof d3);

const item = {
  ["Amritaash"]: true,
  ["Age"]: 15,
  ["Gender"]: "Male",
  ["Rahul"]: "Naam toh suna hee hoga",
  ["Joginder"]: undefined,
};
console.log(item["Amritaash"]);

//practice set chapter 1

//1. create a variable of type string and try to add a number to it
let variable = "String";
variable = variable + 9;
console.log(variable);

//2. use typeof operator to find the datatype of the string in last question

let a2 = "This is a string";
console.log(typeof (a2 + 90)); //It will still return string

//3. create a const object in javascript can you change it to hold a number later ans. NO
const object = {
  name: "Amritaash Verma",
  age: 15,
  gender: "Male",
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
  ["Secualrism"]:
    "Not favouring any knid of religion and treating all religions equally.",
};

console.log(new_dict["Intelligent"]); //these two perform the same function
console.log(new_dict.Intelligent); //these two perform the same function

console.log("Change to test gitignore.");

// Revision of old concepts -- basically practice questions from the course of apna college

const product = {
  ["Product name"]: "Parker Jotter Standard CT Ball Pen",
  ["Product Price"]: "RS. 270",
  ["Rating"]: "4/5",
  ["Number of reviews"]: "7002",
};

const profile = {
  ["ACC_name"]: "shradhakapra",
  ["Profile bio"]:
    "Apna College | Ex-Microsoft, DRDO. \nTo educate someone is the highest privelege ❤️",
  ["Verified_boolean"]: true,
};

console.log(product);
console.log(profile);
/*
const number = prompt("Enter a number: ");
if (number%5 == 0) {
    console.log(number, "is a multiple of 5.");
}
else {
    console.log(number, "is not a multiple of 5.")
}

let score = prompt("What is your score?")
if (score > 90) {
    console.log("A")
}
else if (score > 80 & score < 90) {
    console.log("B")
}
*/

// Printing all even number from 1 to 100

for (let i = 1; i < 101; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
const username = prompt("Enter your name to be made into a username: ");
console.log(
  `Generated user name = @${
    username + username.length
  } and your full name is ${username}`
);
let marks = [85, 97, 44, 37, 76, 60];
let temp = 0;
for (let i of marks) {
  temp += i;
}
let average = temp / marks.length;
console.log(`the average marks of the class = ${average}`);

let original_price = [250, 645, 300, 900, 50];

/*let j = 0;
for (let i of original_price) {
    let discounted_price = i - i/10;
    original_price[j]  = discounted_price;
    j++;
}
console.log(`values after offer ${original_price}`);    
*/

// alternate method

for (let i = 0; i < original_price.length; i++) {
  console.log(`The original price of the item is ${original_price[i]}`);
  let discounted_price = original_price[i] - original_price[i] / 10;
  console.log(
    `The discounted price of the respective item is ${discounted_price}`
  );
}

let companies = ["Bloomberg", "Mircosoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);

// functions revision

const sentence = "Checking number of vowe";

function Vowel_number_checker(sentence) {
  let vowels = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i].toLowerCase() == "a" ||
      sentence[i].toLowerCase() == "e" ||
      sentence[i].toLowerCase() == "i" ||
      sentence[i].toLowerCase() == "o" ||
      sentence[i].toLowerCase() == "u"
    ) {
      vowels++;
    }
  }
  return vowels;
}

console.log(Vowel_number_checker(sentence));

const Vowel_checker = (sentence) => {
  let vowels = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (
      sentence[i].toLowerCase() == "a" ||
      sentence[i].toLowerCase() == "e" ||
      sentence[i].toLowerCase() == "i" ||
      sentence[i].toLowerCase() == "o" ||
      sentence[i].toLowerCase() == "u"
    ) {
      vowels++;
    }
  }
  return vowels;
};

console.log(Vowel_checker(sentence));

// THIS IS IMPORTANT HERE WE WILL DO FOR EACH LOOP

let arr = [2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach((val) => {
  console.log(val * val);
});

let arr2 = [5, 6, 23, 125, 25];

const largest_value = arr2.reduce((first, second) => {
  if (first > second) {
    return first;
  } else if (second > first) {
    return second;
  }
});

console.log(largest_value);

let marks2 = [34, 43, 89, 90, 95, 98, 97, 91];

const students_with_above_90 = marks2.filter((value) => {
  return value >= 90;
});

console.log(students_with_above_90);

let n = parseInt(prompt("Enter a number n:")) + 1;

let nums_till_n = [];

for (let i = 1; i < n; i++) {
  nums_till_n.push(i);
}

console.log(nums_till_n);

const sum_till_n = nums_till_n.reduce((prev, next) => {
  return prev + next;
});

console.log(sum_till_n);

const product_till_n = nums_till_n.reduce((prev, next) => {
  return prev * next;
});

console.log(product_till_n);
