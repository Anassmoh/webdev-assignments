'use strict';
const numbers = [1,3,4,6];

function even(x) {
    const even = new Array();
    for (const number of x) {
        if (number % 2 === 0) {
            even.push(number);
        }
    } return even;
}

console.log(numbers, even(numbers));