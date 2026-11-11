'use strict';


const btn = document.querySelector('#start');
const result = document.querySelector('#result');

let calculation;

btn.addEventListener('click', () => {
    const num1 = Number(document.getElementsByTagName('input')[0].value);
    const num2 = Number(document.getElementsByTagName('input')[1].value);
    const option = document.querySelector('#operation');
    if (option.value === 'add') {
        calculation = num1 + num2;
    } else if (option.value === 'sub') {
        calculation = num1 - num2;
    } else if (option.value === 'multi') {
        calculation = num1 * num2;
    } else {
        calculation = num1 / num2;
    }
    
    result.innerHTML = calculation;

});