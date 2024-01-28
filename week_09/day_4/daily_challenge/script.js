// Create a form with two fields (name, last name) and a submit button.

// When you click the Send button, retrieve the data from the inputs,
// and append it on the DOM as a JSON string.

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    let o = {
        name: formData.get('name'),
        lastname: formData.get('last-name')
    }
    document.querySelector('body').innerHTML += JSON.stringify(o)
})