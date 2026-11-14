"use strict";

const number1 = parseInt(prompt('First number: '));
const number2 = parseInt(prompt('Second number: '));
const number3 = parseInt(prompt('Third number: '));

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = sum / 3;

document.querySelector('#target').innerHTML = `Sum: ${sum}<br>Product: ${product}<br>Average: ${average}`;
