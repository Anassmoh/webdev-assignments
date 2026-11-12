'use strict';


const btn = document.querySelector('#start');
const result = document.querySelector('#result');
let calc;

btn.addEventListener('click', () => {
    const text = document.querySelector('input').value;
    if (text.includes('+')) {
        const numbers = text.split('+');
        calc = Number(numbers[0]) + Number(numbers[1]);
    } else if (text.includes('-')) {
        const numbers = text.split('-');
        calc = numbers[0] - numbers[1];
    } else if (text.includes('*')) {
        const numbers = text.split('*');
        calc = numbers[0] * numbers[1];
    } else if (text.includes('/')) {
        const numbers = text.split('/');
        calc = numbers[0] / numbers[1];
    }; 
    result.innerHTML = calc
});

