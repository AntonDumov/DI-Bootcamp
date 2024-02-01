const setLoadingState = state => {
    if (state) {
        document.querySelector('.result').classList.add('result-hidden')
        document.querySelector('.loading').classList.remove('loading-hidden')
    } else {
        document.querySelector('.loading').classList.add('loading-hidden')
        document.querySelector('.result').classList.remove('result-hidden')
    }
}

const setResult = html => {
    document.querySelector('.result').innerHTML = html
    setLoadingState(false)
}

const getRandomId = () => {
    return Math.floor(Math.random() * 82) + 1;
}

const htmlTemplate = data => {
    return `<div><h3>${data.name}</h3></div>
<div>Height: ${data.height}</div>
<div>Gender: ${data.gender}</div>
<div>Birth Year: ${data.birth_year}</div>
<div>Home World: ${data.homeworld || 'unknown'}</div>
`
}

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

const getHomeWorldName = async (id) => {
    const data = await apiRequest('planets', id);
    return data.properties.name;
}

const findSomeone = async () => {
    try {
        setLoadingState(true);
        const personData = await apiRequest('people', getRandomId());
        const planetId = personData.properties.homeworld.split('/').pop();
        personData.properties.homeworld = await getHomeWorldName(planetId);
        setResult(htmlTemplate(personData.properties));
    } catch (error) {
        setResult(`<div>${error.toString().replace('\n', '<br>')}</div>`);
    } finally {
        setLoadingState(false);
    }
}

window.addEventListener('load', () => {
    document.querySelector('button').addEventListener('click', () => {
        findSomeone()
    })
})