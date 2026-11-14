'use strict';

const button = document.querySelector('form')
const query = document.querySelector('#query')
const article = document.createElement('article')


async function MakeMeLaugh(subject) {
    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(subject)}`)
        if (!response.ok) {
            throw new Error("some error" + response.status);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log('the actual error', error);
    }
}

button.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = await MakeMeLaugh(query.value);
    if (!data) {
        return;
    }
    if (article) {
        article.remove();
    }

    if (data.total === 0) {
        return
    } else {
        for (const dat of data.result) {
            const article = document.createElement('article')
            const parag = document.createElement('p')
            parag.textContent = dat.value
            article.appendChild(parag)
            button.parentNode.appendChild(article)
        }
    }
});