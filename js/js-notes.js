"use strict"; // doesn't allow for tom foolery in the code

// Alert - a pop up msg to the user from js
alert("howdy from js")

// confirm - a popup msg to user from js that can capture a boolean
let confirmed = confirm('we have lunch at 12?')

// prompt - a pop up msg to user from js that ask for a text value
let userString = prompt('what is your favorite color?')


// parseFloat is better than Number operator
// let numX = parseFloat(prompt())
// turns prompt straight to number instead of string better for future referencing of variables


// functions notes follow

// function camelCase(){
//      return "camelCase"
//      };
// structure of function
// return statement ends a function

// Anonymous functions
// example
const increment = function(x){
     return x + 1;
}

let two = increment(1);
console.log(two)

// example 2
function addNumber(num1, num2){
    let sum = num1 + num2;
    return sum;
}

let sum = addNumber(5,5);
console.log(sum)

// Arrow functions
// example
// function helloWorld(){
//    console.log('hello')
//    return 'hello';
// }
// function example to compare to the arrow function below
const helloWorld2 = () => 'hello code';
console.log(helloWorld2());
// This is an arrow function, same same but different. doesnt use curly braces

// parameter values, conditional logic


// variables outside a function are global i.e can be used everywhere
// variables inside a function are local can only be used within that function
// break out a variable with a return statement and make a variable set to that function

// best practices
// keep functions towards top of page and keep them generally oriented on one thing
// try to refine code to its simplest form