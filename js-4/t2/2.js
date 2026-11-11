'use strict';

const dotarget = document.querySelector("#target");
const list = ['First item', 'Second item', 'Third item'];

list.forEach(item => {
    const litem = document.createElement('li');
    litem.textContent = item
    dotarget.appendChild(litem)
});

dotarget.children[1].classList.add('my-item')