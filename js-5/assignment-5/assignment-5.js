'use strict';

async function MakeMeLaugh() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('some issue : ' + response.status)
        }
        const data = await response.json()
        const joke = data.value
        console.log(joke)
    } catch (error) {
        console.log("error is: ", error)
    }
}

MakeMeLaugh()