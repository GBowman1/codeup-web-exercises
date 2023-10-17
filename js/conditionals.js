"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color) {
//     if (color === 'blue') {
//         return 'The Ocean is Blue'
//     } else if (color === 'green') {
//         return 'The Grass is Green'
//     } else if (color === 'yellow') {
//         return 'Sunflowers are Yellow'
//     } else if (color === 'red') {
//         return 'Apples are red'
//     } else if (color === 'orange') {
//         return 'The fruit Orange is the color Orange'
//     } else {
//         return 'I have no idea what that color looks like...'
//     }
// }

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

//console.log(randomColor);
//console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
let color = prompt('What is your Favorite Color?').toLowerCase()
switch(color) {
    case "blue":
        alert('Very nice, Did you know The Ocean is Blue');
        break;
    case "green":
        alert('Very nice, Did you know The Grass is Green');
        break;
    case "yellow":
        alert('Very nice, Did you know Sun Flowers are Yellow');
        break;
    case "red":
        alert('Very nice, Did you know Roses are Red');
        break;
    case "Red":
        alert('Very nice, Did you know Strawberries are Red');
        break;
    default:
        alert('I have no idea what that color looks like...');
        break;
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

 // refer to code above
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
let totalAmount = parseFloat(prompt('What is your total today?')).toFixed(2)
function calculateTotal(luckyNumber, totalAmount){
    let discountPrice = 0
    if (luckyNumber === 0) {
        return `Not so lucky, No discount for you. Your total will be $${totalAmount}.`
    } else if (luckyNumber === 1) {
        discountPrice = totalAmount * .9;
        return `Nice!, thats 10% off now your total is $${discountPrice.toFixed(2)}, it was $${totalAmount}`;
    } else if (luckyNumber === 2) {
         discountPrice = totalAmount * .75;
         return `Very Nice, thats 25% off now your total is $${discountPrice.toFixed(2)}, it was $${totalAmount}`;
    } else if (luckyNumber === 3) {
        discountPrice = totalAmount * .65;
        return `Awesome, you landed 35% off now your total is $${discountPrice.toFixed(2)}, it was $${totalAmount}`;
    } else if (luckyNumber === 4) {
        discountPrice = totalAmount * .5;
        return `Thats pretty lucky, your total is half off and now $${discountPrice.toFixed(2)}, it was $${totalAmount}`;
    } else if (luckyNumber === 5) {
        discountPrice = 0;
        return 'WOW!, you are lucky your purchase is free today!';
    } else {
        return 'Could not apply Discount, sorry.'
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
const luckyNumber = Math.floor(Math.random() * 6);


alert(`Your lucky number is ${luckyNumber}`)
alert(calculateTotal(luckyNumber, totalAmount))

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let wouldLikeTo = confirm('would you like to input');
// asking user question with confirmation

let userNum = 0
if (wouldLikeTo === true) {
    userNum = parseFloat(prompt('Please input a number.'));
}
// ask user to enter a number based off there confirmation
function isEven(userNum) {
    if (userNum % 2 == 0) {
        return `${userNum} is a even number.`;
    } else {
        return `${userNum} is a odd number.`;
    }
};
// alert(isEven(userNum)) tested
// function to show user is there number is even or odd

let userNumAdd = userNum + 100
// alert(`${userNumAdd} is the result of adding 100 to ${userNum}`); tested
// alert to show user their number plus 100

function isPos(userNum) {
    if (userNum >= 0) {
        return `${userNum} is a positive number.`;
    } else {
        return `${userNum} is a negative number.`;
    }
};
// alert(isPos(userNum)) tested
// function to alert if user number is pos or neg

let isNumber = !isNaN(userNum);
if (isNumber){
    alert(isPos(userNum));
    alert(`${userNumAdd} is the result of adding 100 to ${userNum}`);
    alert(isEven(userNum));
} else {
    alert('Could you try again adding a number.')
};
// a way to prevent calculations from running if user does not input proper data value