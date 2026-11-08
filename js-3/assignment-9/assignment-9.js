'use strict';
const numbers = [];
function even(numbers) {
    const even = new Array();
    for (const number of numbers) {
        if (number % 2 === 0) {
            even.push(number);
        }
    } return numbers, even;
}

console.log(numbers, even);