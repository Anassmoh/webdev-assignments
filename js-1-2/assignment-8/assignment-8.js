"use strict";

const starting = Number(prompt("Enter a start year: "));
const ending = Number(prompt('Enter an end year: '));
let items = "";

for (let i = starting; i <= ending; i++) {
    if (i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)) {
        items += `<li>${i}</li>`;
    }
}
document.querySelector("#target").innerHTML = items;

