"use strict";

import {getRandomGreeting} from "./greeting-logic.js";

document.forms.userName.addEventListener("submit", (e) => {
    e.preventDefault();
   let name = document.querySelector("#user-name-input").value;
    let greeting = getRandomGreeting();

    let p = document.createElement("p");
    p.innerText = `${greeting}, ${name}`;

    document.querySelector("#append").innerHTML = " "
    document.querySelector("#append").appendChild(p)
})


// import {randomGreeting} from "./greeting-logic.js";
// import randomNumber from "./number-utils.js";
//
//
// let index = randomNumber(1,20);
// let usersName = document.querySelector("#user-name-input").value;
// let greeting = randomGreeting(index);
// document.querySelector("button").addEventListener("submit", (e) =>{
//     e.preventDefault()
//     console.log(usersName);
//     document.querySelector("h1").innerText = `${greeting}, ${usersName}!`;
// });