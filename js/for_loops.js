'use strict';

function showMultiplicationTable(num) {
    for(let i = 1; i <= 10; i++) {
        const table = i * num;
        console.log(`${num} * ${i} = ${table}`);
    }
}

// function w/ for loop to make a multiplication table

// showMultiplicationTable(5)
// showMultiplicationTable(8)
// showMultiplicationTable(6)
// showMultiplicationTable(2)
// TEST

for (let i= 1; i <= 10; i++) {
    let i = Math.floor(Math.random() * 200 - 20) + 20;
    if (i % 2 === 0 ) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}
// for loop to give 10 random number up to 200 and test for even or odd

let n = 9;
// pattern to 9
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);

var numberToStopAt = 5;

for (let i = 100; i >= 5; i-=5) {

    console.log(i);
}
