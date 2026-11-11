'use strict';

const target = document.querySelector('#target');
const trigger = document.querySelector('#trigger');

trigger.addEventListener('mouseover', () => {
    target.src = 'img/picB.jpg'
});
trigger.addEventListener('mouseout', () => {
    target.src = 'img/picA.jpg'
});