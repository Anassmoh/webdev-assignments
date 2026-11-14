"use strict";

const aname = prompt("Enter your name: ");
const x = Math.floor(Math.random() * 4) + 1;

let house;

if (x === 1) {house = "Gryffindor";} 
else if (x === 2) {house = "Slytherin";}
else if (x === 3) {house = "Hufflepuff";}
else if (x === 4) {house = "Ravenclaw";}

document.querySelector("#target").textContent = aname + ', you are ' + house + '.';