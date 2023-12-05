"use strict";

import randomNumber from "./number-utils.js";


const greetings =
    [
        "Hello",
        "Hi",
        "Hey there",
        "Greetings",
        "Salutations",
        "Howdy",
        "Yo",
        "Bonjour",
        "Hola",
        "Ciao",
        "Namaste",
        "G'day",
        "What's up",
        "Sup",
        "How's it going",
        "Nice to meet you",
        "Welcome",
        "Hey",
        "How are you",
        "Pleased to meet you"
    ];
// export function randomGreeting(num) {
//     // let index = randomNumber(0,20)
//     return greetings[num];
// }
export const getRandomGreeting = () => greetings[randomNumber(0,greetings.length - 1)];


