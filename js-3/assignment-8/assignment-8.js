'use strict';



function concat(array) {
    let line = '';
    for (const str of array) {
        line += str;
    } return line;
} 

document.querySelector('#target').innerHTML = concat([1,2]);