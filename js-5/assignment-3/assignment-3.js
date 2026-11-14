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

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = await fetchit(query.value);

    const division = document.querySelector('#results');
    division.innerHTML = ''

  

    for (const dat of data) {

        const heading2 = document.createElement('h2');
        division.appendChild(heading2);
        heading2.textContent = dat.show.name

        const link = document.createElement('a');
        division.appendChild(link);
        link.setAttribute('target', '_blank')
        link.href = dat.show.url
        link.textContent = 'Details'

        const image = document.createElement('img');
        division.appendChild(image);
        image.src = dat.show.image?.medium
        image.alt = dat.show.name

        const article = document.createElement('article');
        division.appendChild(article);
        article.appendChild(heading2)
        article.appendChild(link)
        article.appendChild(image)

        const summary = document.createElement('summary')
        division.appendChild(summary)
        summary.innerHTML = dat.show.summary


    }
    





});

