"use strict";

const number = Number(prompt("Enter a number of dices: "));
const sum_eye = Number(prompt("Enter the number of eyes: "));
let hit = 0;

for (let i = 0; i < 10000; i++) {
        let sum = 0;
        for (let i = 0; i < number; i++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum == sum_eye) {
        hit++;
    }
}

const prob = (hit/10000) * 100;

document.querySelector("#target").innerHTML = `Probability to get sum ${sum_eye} with ${number} dice is ${prob.toFixed(2)}%`

