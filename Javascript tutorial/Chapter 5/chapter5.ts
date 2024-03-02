//@ts-ignore
const prompt = require("prompt-sync")(); //to fix prompt error 
// accessing elements from arrays
let numbers = [1, 2, 3, 4]
console.log(numbers[0])

console.log(numbers.length) //gives length of the list 

numbers[3] = 12
let a = [56, 69, 78]

console.log(numbers.toString) /*prints the array as a string seperating elements with 
commas */
console.log(numbers.join("-")) /*coconmbines list elements and sperates them with 
character given */
numbers.push(5) // adds an element
numbers.pop()
console.log(numbers.shift) //removes and prints last element
console.log(numbers.unshift(65)) /*add an element to the first index and returns the 
new length of the list*/
console.log(numbers.concat(a))
console.log(numbers.sort)
numbers.splice(0, 1, 23, 24) /* .splice(index, no.of elements to remove, 
first element to add, second element to add) */
console.log(numbers)
console.log(numbers.slice(2, 4))
console.log(numbers.reverse)

// Looping through arrays

let num1 = [3, 24, 56]

//forEach is used when we want to do the operations in the same array
num1.forEach((element, index) => {
    console.log(element, index)
}) //this function will print out each element in the list
let namely = "someone";
let sew_name = Array.from(namely); //used to create an array from another object
console.log(sew_name)

// for...of 
for (let i of num1) {
    console.log(i)
}

// for...in
for(let i in num1) {
    console.log(num1[i])
}

/*map((value_in_array, index, array)) 
used when we want to make a new array and perform operations on it */
const b = [1, 2, 3]
let c = b.map((element, index, array) => {
    console.log(element, index, array)
    return element + 2 //returns the same array and adds 1 to each element
})
console.log(c)

// filter() returning only values greater than 5 in the array
const t = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let a2 = t.filter((value) => {
    return value>5
})

console.log(a2)
// reduce method
let arr3  = [1, 2, 3, 5, 2, 1]
let arr = arr3.reduce((value1, value2)=>{
    return value1 + value2
}) 
/* this takes the first 2 values of the array and performs the given operation on those 2 
values and then takes the returned value and the next value till the array is done*/  

console.log(arr)

//practice sets

//no.1 
let num_arr = [1, 2, 3, 4, 5, 6]
let input = Number(prompt("Enter a number to add in the array: "))
num_arr.push(input)
console.log(num_arr)

//no.2
while(input != 0) {
    num_arr.push(input)
    input = Number(prompt("Enter another number: "))
}
console.log(num_arr)

// no. 3
let smth = [2, 40, 62, 70, 80, 90, 100, 20, 30, 40, 50, 60, 10]
let new_num_arr = smth.filter((element) => {
    return element%10 == 0
})
console.log(new_num_arr)

// no. 4
new_num_arr = [1, 2, 3, 4, 5, 6]
let arr_of_squares = []
new_num_arr.forEach((element) => {
    //@ts-ignore
    arr_of_squares.push(element*element)
})
console.log(arr_of_squares)

//no. 5 
new_num_arr = [1, 2, 3, 4, 5, 6, 7]
let factorial = new_num_arr.reduce((value1, value2) => {
    return value1 * value2
})
console.log("The factorial of 7 is", factorial)
