'use strict';
const doc = document.getElementById('target');
const list = ['First item', 'Second item', 'Third item'];

list.forEach(i => {
    doc.innerHTML += `<li>${i}</li>`
});


doc.classList.add('my-list')