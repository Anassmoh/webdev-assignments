"use strict"

const n = Number(prompt("Enter a number: "));
let sum = 0;

for (let i=0; i<n; i++) {
    sum += Math.floor(Math.random() * 6) + 1;
}

document.querySelector("#target").innerHTML = `${sum}`