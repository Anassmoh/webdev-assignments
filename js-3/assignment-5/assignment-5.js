'use strict';

const numbers = new Array();
let num 
while (true) {
    num = Number(prompt('Enter a unique number: '));
    if (numbers.includes(num)) {
        alert('The number has already been given.');
        break;
    }
    numbers.push(num)
} 

console.log(numbers.sort((a,b) => a-b));
