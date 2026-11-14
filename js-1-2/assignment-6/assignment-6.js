"use strict";

const answer = confirm('Should I calculate the square root?');

if (answer) {
    const number = prompt("Enter a number: ")
    if (number > 0 ) {
        const result = Math.sqrt(number)
        document.querySelector("#target").textContent = `The square root is: ${result}.`
    }
    else {
        document.querySelector("#target").textContent = 'The square root of a negative number is not defined';
    }
} else {
    document.querySelector("#target").textContent = 'The square root is not calculated.'
}
