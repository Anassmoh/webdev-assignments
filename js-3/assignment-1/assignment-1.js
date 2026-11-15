'use strict';

const five = []

for (let i = 0; i < 5; i++) {
    const number = Number(prompt('Enter a number: '));
    five.splice(0,0,number);
}


console.log(five);