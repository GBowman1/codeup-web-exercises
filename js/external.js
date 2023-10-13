'use strict';

alert('Welcome to my Website!');
// webpage greeting pop-up
let userFavColor = prompt('What is your favorite color?');
// Prompt to determine users favorite color and assign to variable userFavColor
alert('Awesome, ' + userFavColor + ' is my favorite color as well!');
// Pop-up to acknowledge favorite colors

let movieA = prompt('How many days did you rent The Little Mermaid?');
// Prompt to determine how man days user rented movieA
let movieB = prompt('How many days did you rent Brother Bear?');
// Prompt to determine how many days user rented movieB
let movieC = prompt('How many days did you rent Hercules?');
// Prompt to determine how many days user rented movieC
let fee = 3;
// cost per movie per day
let cost = (Number(movieA) + Number(movieB) + Number(movieC)) * fee;
// Cost determines total price paid for rentals
alert('The movie rental fee will cost $' + cost);
// Pop-up to give total cost to user

let googleRate = prompt('What is your pay rate for Google?');
// Prompt to determine users pay rate for Google
let amazonRate = prompt('What is your pay rate for Amazon?');
// Prompt to determine users pay rate for Amazon
let facebookRate = prompt('What is your pay rate for Facbook?');
// Prompt to determine users pay rate for Facebook
let googleH = prompt('How many hours did you work for Google?');
// Prompt to determine how many hours the user worked for Google
let amazonH = prompt('How many hours did you work for Amazon?');
// Prompt to determine how many hours the user worked for Amazon
let facebookH = prompt('How many hours did you work for Facebook?');
// Prompt to determine how many hours the user worked for Facebook
let googleP = Number(googleRate) * Number(googleH)
// googleP represents money made from google
let amazonP = Number(amazonRate) * Number(amazonH)
// amazonP represents money made from amazon
let facebookP = Number(facebookRate) * Number(facebookH)
// facebookP represents money made from facebook
let p = facebookP + amazonP + googleP
// p represents profit made
alert('you made $' + p + ' from your contracts')
// alert to tell user how much they made for the time they worked