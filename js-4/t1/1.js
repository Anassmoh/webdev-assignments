'use strict';

const targ = document.getElementById('target')
const lister = ['First', 'Second', 'Third']

lister.forEach(item => 
    targ.innerHTML += `<li>${item} item</li>` )

targ.classList.add('my-list')