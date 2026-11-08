'use strict';

const dogs = [];
let lis = '';
for (let i = 1; i <= 6; i++) {
    const dog = prompt('Enter the name of dog number ' + i + ': ');
    dogs.push(dog);
}

dogs.sort();
dogs.reverse();

for (const dog of dogs) {
    lis += `<li>${dog}</li>`
}

document.getElementById("target").innerHTML = lis