'use strict';

let result = ''

function roll() {
    const rand = Math.floor(Math.random() * 6) + 1;
    return rand;
}

while (true) {
    const rand = roll();
    result += `<li>${rand}</li>`
    if (rand === 6) {
        break;
    }
}

document.querySelector("#target").innerHTML = result;