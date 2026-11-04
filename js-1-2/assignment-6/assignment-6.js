"use strict";

const answer = confirm('Should I calculate the square root?');

if (answer) {
    let number = prompt("Enter a number: ")
    if (number > 0 ) {
        let result = Math.sqrt(number)
        document.querySelector("#target").innerHTML = `The square root is: ${result}.`
    }
    else {
        document.querySelector("#target").innerHTML = 'The square root of a negative number is not defined"'
    }
} else {
    document.querySelector("#target").innerHTML = 'The square root is not calculated.'
}
