'use strict';

let result = ''
const eye = Number(prompt('Enter number of eyes: '));


function roll(x) {
    const rand = Math.floor(Math.random() * x) + 1;
    return rand;
}

while (true) {
    const rand = roll(eye);
    result += `<li>${rand}</li>`
    if (rand === eye) {
        break;
    }
}

document.querySelector("#target").innerHTML = result;