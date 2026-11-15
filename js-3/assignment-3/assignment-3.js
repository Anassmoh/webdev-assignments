'use strict';

const dogs = [];
for (let i = 1; i <= 6; i++) {
    const dog = prompt('Enter the name of dog number ' + i + ': ');
    dogs.push(`<li>${dog}</li>`);
}

dogs.sort();
dogs.reverse();

document.getElementById("target").innerHTML = dogs.join('')