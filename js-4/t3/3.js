'use strict';
const names = ['John', 'Paul', 'Jones'];

names.forEach(name => {
    document.querySelector("#target").innerHTML += `<li>${name}</li>`
});
