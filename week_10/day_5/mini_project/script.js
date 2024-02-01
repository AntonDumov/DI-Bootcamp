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

const apiRequest = (type, id) => {
    return new Promise((resolve, reject) => {
        fetch(`https://www.swapi.tech/api/${type}/${id}/`).then(r => {
            r.json().then(data => {
                if (data.message === 'ok') {
                    resolve(data.result)
                } else {
                    reject(Error('Something went wrong!'))
                }
            })
        })
    })
}

const getHomeWorldName = id => {
    return new Promise(resolve => {
        apiRequest('planets', id).then(data => {
            resolve(data.properties.name)
        })
    })
}

const findSomeone = () => {
    setLoadingState(true)
    apiRequest('people', getRandomId()).then(data => {
        let planetId = data.properties.homeworld.split('/').pop()
        getHomeWorldName(planetId).then(pName => {
            data.properties.homeworld = pName
            setResult(htmlTemplate(data.properties))
        })
    })
        .catch(reason => {
            setResult(`<div>${reason.toString()}</div>`)
        })
}

window.addEventListener('load', () => {
    document.querySelector('button').addEventListener('click', () => {
        findSomeone()
    })
})