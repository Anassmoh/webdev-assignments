'use strict';

const body = document.querySelector("body");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = 'black';
}
function hangeBackground() {
  const rndCl = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = 'white';
}

body.addEventListener("mouseover", changeBackground);
body.addEventListener("mouseout", hangeBackground);