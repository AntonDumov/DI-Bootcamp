// Instructions

// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

// In the HTML file, add a form, containing an input and a button.
// This input is used to fetch gif depending on a specific category.

// In the JS file, create a program to fetch one random gif depending on the search of the user
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).

const deleteAll = () => {
    document.querySelector('#imagesContainer').innerHTML = ''
}

const findAndShow = () => {
    const query = document.querySelector('input').value
    if (query) {
        fetch(`https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${query}`)
            .then(response => response.json())
            .then(responseObject => {
                const gifObject = responseObject.data
                document.querySelector('#imagesContainer').innerHTML +=
                    `<div id="container${gifObject.id}"><img src='${gifObject.embed_url}'><button id="delete${gifObject.id}">delete</button></div>`
                document.querySelector(`#delete${gifObject.id}`).addEventListener('click', e => {
                    document.querySelector(`#container${gifObject.id}`).remove()
                })
            })

    }
}


// The gif should be appended with a DELETE button next to it. Hint :
// to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

// Allow the user to delete a specific gif by clicking the DELETE button.

// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.