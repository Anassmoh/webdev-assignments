"use strict";

let number1 = parseInt(prompt('First number: '));
let number2 = parseInt(prompt('Second number: '));
let number3 = parseInt(prompt('Third number: '));

let sum = number1 + number2 + number3;
let product = number1 * number2 * number3;
let average = sum / 3;

document.querySelector('#target').innerHTML = `Sum: ${sum}<br>Product: ${product}<br>Average: ${average}`;
