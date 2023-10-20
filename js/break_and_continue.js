'use strict';

let userOdd = true;
while (userOdd){
    let userInput = parseFloat(prompt("Please enter a odd number."));
    if(userInput % 2 !== 0){
        console.log(`Number to skip is: ${userInput}`)
        for (let i = 1; i <= 50; i++) {
            if (i % 2 === 0) {
                continue;

            } else if (i === userInput) {
                console.log('Yikes! Skipping number: ' + i);
                continue;
            }

            console.log('Here is a a odd number: ' + i);
        }
        break;

    }
}
// quite possibly over complicated nested loop to allow a user to input value if not true loops prompt if
// true continues to internal loop to consolelog message.



// for (let i = 1; i <= 50; i++) {
//     console.log(`Number to skip is: ${userInput}`)
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a a odd number: ' + i);
// }