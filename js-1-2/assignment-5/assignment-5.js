"use strict"

let year = prompt('Enter a Year: ');

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    document.querySelector("#target").innerHTML = `${year} is a leap year.`;

} else {
        document.querySelector("#target").innerHTML = `${year} is not a leap year.`;
}