"use strict";

let name = prompt("Enter your name: ");
let x = Math.floor(Math.random() * 4) + 1;

let house

if (x === 1) {house = "Gryffindor";} 
else if (x === 2) {house = "Slytherin";}
else if (x === 3) {house = "Hufflepuff";}
else if (x === 4) {house = "Ravenclaw";}

document.querySelector("#target").innerHTML = `${name}, you are ${house}.`;