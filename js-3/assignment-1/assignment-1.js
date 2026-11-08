'use strict';

const five = [], evif = [];

for (let i = 1; i <= 5; i++) {
    const number = Number(prompt('Enter a number: '));
    five.push(number);
}

for (let i = 1; i <= 5; i++) {
    evif.push(five.pop());
}

console.log(evif);