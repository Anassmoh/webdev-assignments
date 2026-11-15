'use strict';

 const submit = document.querySelector('#source');

submit.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const thename = document.getElementsByTagName('input');
    document.querySelector('#target').textContent= `Your name is ${thename[0].value} ${thename[1].value}`
 });



