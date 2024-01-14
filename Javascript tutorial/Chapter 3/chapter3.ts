//for loops

let sum1 = 0;
for (let i = 0; i<5; i++) { //for (statement; condition; operation)
    sum1 += (i + 1);
}
console.log(sum1)

let obj = {
    harry: 90,
    sunaina: 88,
    ricky: 10, 
    Gadhe: 50,
    Hadde: 190
}

//for in loops are only for arrays 
for (let a in obj) {
    console.log("The credit score of", a, "is", obj[a])
}

//for of loops are only for strings 
let s = "String";

for (let a of s) {
    console.log(a);
}

//while loop
let acco = 1

while (acco < 6) {
    console.log(acco*5);
    acco += 1
}

// do while loops (if the while loop has to be executed even once even if condition is false)
let bacco = 1
do {
    console.log(bacco ** 5);
    bacco += 1
} while (bacco > 5)

//prime number function
function isPrime(num) {
    let factors = 1;
    let a = 0;
     while (a < num) {
      if (num % a == 0) {
        factors += 1;
      } 
      a += 1;
    }
    
    if (num == 0 || num == 1 || Math.sign(num) == -1) {
        return false;
      }
    else if (factors < 3) {
      return true;
    }
    else if (factors >= 3) {
      return false;
    }
  }

// @ts-ignore
let num = 2
console.log(num, "is a prime number is:", isPrime(num));

//practice set

//no.1

//no.2

let obj_marks = {
    harry: 98,
    rohan: 78,
    aakash: 7
}

for (let a in obj_marks) {
    console.log("The marks of", a, "is:", obj_marks[a]);
}

//no.3
let number2 = 12;

// const readline = require('node:readline').createInterface({
//  input: process.stdin,
//  output: process.stdout,
// });

function gitty_up() {
  console.log("this is for gitty")
}