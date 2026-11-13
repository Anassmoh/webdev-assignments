"use strict";

const number = Number(prompt("Enter a number: "));
let j = 0

for (let i = number; i > 0; i--) {
    if (number % i === 0) {
        j++;
    }
}

if (j === 2) {
    document.querySelector("#target").innerHTML = `${number} is a prime number`
} else {
    document.querySelector("#target").innerHTML = `${number} is not prime number`

}