'use strict';

const form = document.querySelector("form");
const query = document.querySelector("#query");

async function fetchit(keyword) {
    try {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(keyword)}`);
        if (!response.ok) {
            throw new Error('some error : ', response.status)
        }
        const data = await response.json();
        console.log('check these out: ', data)
        return data
    }
    catch (error) {
        console.log('this is the error', error)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetchit(query.value);

});