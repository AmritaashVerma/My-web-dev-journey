console.log("Operators in js")
//only the increment and decrement operators are different rest other operators are the same as python
console.log("Arithemetic operators")
//disnigga 
// @ts-ignore 
let num = 10;
console.log("++num", ++num); //11
console.log("num++", num++); // 11
console.log("--num", --num); // 11
console.log("num--", num--);// 11
console.log("num", num);//10
console.log("num--", num--);//10
//so from above we see that ++num increments the number by 1 first then prints it but num++ first prints the number then increments afterwards and same goes for the case of --num and num-- which decrements by 1
console.log("Assignment operators")
let d = 10;
console.log(d += 5) //same as d = d + 5
console.log(d *= 5) //same as d = d * 5
console.log("comparision operators")
let comp1 = 5;
let comp2 = 4;
console.log(comp1 == comp2); //should return false
console.log(comp1 != comp2); //should return true
console.log(comp1 === comp2); //should return false (gives if variables are of same value and type)
console.log(comp1 !== comp2); //gives not equal value or not equal type (should return true)
console.log(comp1 > comp2); //true
console.log(comp1 < comp2); //false
console.log(comp1 >= comp2); //true
console.log(comp1 <= comp2);//false

console.log("logical operators work on boolean values")
console.log(comp1>comp2 && comp2==4) // && stands for and 
console.log(comp1>comp2 || comp1==comp2)// || stands for or
console.log(!false)// converts anything to false or bool value given after !

//conditional statements
console.log("conditional statements")
comp1 = 45;
comp2 = 45;

if (comp1 > comp2 == true) {
    console.log(comp1, ">", comp2)
}

else if (comp1 < comp2 == true) {
console.log(comp1, "<", comp2)
}

else if(comp1 === comp2) {
    console.log(comp1, "and", comp2, "are of the same value and type")
}

else {
    console.log("Jisne input dala code meh voh chootiya hai")
}

//ternary operator
console.log("ternary operator")

let marks = 11
console.log("You have", marks>=11? "passed the exams" : "failed the exams") // 'true':'false'

//practice set 

//use logical operators to find whether the age of a person lies between 10 and 20

const age = 25

if (age >= 10 && age < 20) {
    console.log("The age lies between 10 and 20.")
}

else {
    console.log("The age does not lie between 10 and 20.")
}

//demonstrate the use case of switch case statements in javasrcipt 

/*switch(age) {
    case 12:
        console.log("your age is 12")
        break
    case 13:
        console.log("your age is 13")
        break
    case 14:
        console.log("your age is 14")
        break
    default:
        console.log("your age is not special")
        break

}*/

//write a js program that tells whether a number is divisible either by 2 or 3 and by 2 and 3

const number = 35

if (number % 2 == 0 && number % 3 ==0) {
    console.log(number, "is divisible by 2 amd 3.")
}

else if (number % 2 == 0 || number % 3 ==0) {
    console.log(number, "is divisible either by 2 or 3.")
}

else {
    console.log(number, "is divisible by neither 2 nor 3.")
}

//print you can drive or you can't drive based on age with ternary operator

console.log("You", age>=18? "can drive":"can't drive")