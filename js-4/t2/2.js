'use strict';

const targ = document.querySelector('#target');
const order = ['First','Second','Third']

order.forEach(item => {
    const li = document.createElement('li')
    li.textContent = `${item} item`
    targ.appendChild(li)
})

document.querySelectorAll('li')[1].classList.add('my-item')