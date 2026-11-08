'use strict';

let result = '', rand;

function roll() {
    rand = Math.floor(Math.random() * 6) + 1;
    return rand;
}

while (true) {
    rand = roll();
    result += `<li>${rand}</li>`
    if (rand === 6) {
        break;
    }
}

document.querySelector("#target").innerHTML = result;