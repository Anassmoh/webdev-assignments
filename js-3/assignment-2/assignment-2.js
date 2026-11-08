'use strict';

const participant = Number(prompt("Enter number of participants: "));
const list = [];

for (let i = 1; i <= participant; i++) {
    const name = prompt('Enter the name of participant' + i + ': ');
    list.push(`<li>${name}</li>`)
}
list.sort()
document.querySelector("#target").innerHTML = list.join('');