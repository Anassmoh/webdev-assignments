'use strict';

const array = [];

while (true) {
    const num = Number(prompt('Enter a number: '));
    if (num === 0){
        break;
    } else {
        array.push(num);
    }
}

console.log(array.sort((a,b) => b-a));
