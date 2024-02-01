// Sets the loading state of the page.
const setLoadingState = state => {
    if (state) {
        document.querySelector('.result').classList.add('result-hidden')
        document.querySelector('.loading').classList.remove('loading-hidden')
    } else {
        document.querySelector('.loading').classList.add('loading-hidden')
        document.querySelector('.result').classList.remove('result-hidden')
    }
}

// Sets the HTML content of the result element.
const setResult = html => {
    document.querySelector('.result').innerHTML = html
    setLoadingState(false)
}

// Generates a random ID within range (1 to 83).
const getRandomId = () => {
    return Math.floor(Math.random() * 82) + 1;
}

// Creates an HTML for displaying character data.
const htmlTemplate = data => {
    return `<div><h3>${data.name}</h3></div>
<div>Height: ${data.height}</div>
<div>Gender: ${data.gender}</div>
<div>Birth Year: ${data.birth_year}</div>
<div>Home World: ${data.homeworld || 'unknown'}</div>
`
}

// Makes an API request and returns the data.
const apiRequest = async (type, id) => {
    const response = await fetch(`https://www.swapi.tech/api/${type}/${id}/`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (data.message !== 'ok') {
        throw new Error(`Something went wrong!\n${data.message}`);
    }
    return data.result;
}

// Retrieves the name of a planet based on its ID.
const getHomeWorldName = async (id) => {
    const data = await apiRequest('planets', id);
    return data.properties.name;
}

// Finds and displays data about a random Star Wars character.
const findSomeone = async () => {
    try {
        setLoadingState(true);
        const personData = await apiRequest('people', getRandomId());
        const planetId = personData.properties.homeworld.split('/').pop();
        personData.properties.homeworld = await getHomeWorldName(planetId);
        setResult(htmlTemplate(personData.properties));
    } catch (error) {
        setResult(`<div>Oh No! That person isn't available.<br>${error.toString().replace('\n', '<br>')}</div>`);
    } finally {
        setLoadingState(false);
    }
}

// Event listener for page load.
window.addEventListener('load', () => {
    // Event listener for the button click to trigger the findSomeone function.
    document.querySelector('button').addEventListener('click', () => {
        findSomeone()
    })
})