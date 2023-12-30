colors = [
    'red', 'orangered', 'orange', 'yellow', 'yellowgreen',
    'lightgreen', 'green', 'turquoise', 'cyan', 'lightskyblue',
    'dodgerblue', 'blue', 'darkblue', 'indigo', 'darkmagenta',
    'violet', 'lightpink', 'lightgray', 'gray', 'black', 'white'
]

let chosenColor = null
let mousedown = false

colorsContainer = document.querySelector('.colors')
for (const color of colors) {
    const newColorElement = document.createElement('div')
    newColorElement.classList.add('color')
    newColorElement.style.backgroundColor = color
    colorsContainer.appendChild(newColorElement)
    newColorElement.addEventListener('click', ev => {
        chosenColor = color
    })
}

const drawAreaResolution = [30, 30]

const drawAreaContainer = document.querySelector('.draw-area')
drawAreaContainer.style.gridTemplateColumns = `repeat(${drawAreaResolution[0]}, 1fr)`

pixels = []

for (let x = 0; x < drawAreaResolution[0]; x++) {
    for (let y = 0; y < drawAreaResolution[1]; y++) {
        const newPixel = document.createElement('div')
        newPixel.classList.add('draw-area-pixel')
        drawAreaContainer.appendChild(newPixel)
        pixels.push(newPixel)

        newPixel.addEventListener('mousedown', ev => {
            mousedown = true
            if (chosenColor !== null) {
                newPixel.style.backgroundColor = chosenColor
            }
        })
        newPixel.addEventListener('mouseover', ev => {
            if (chosenColor !== null && mousedown) {
                newPixel.style.backgroundColor = chosenColor
            }
        })

    }
}

document.body.addEventListener('mouseup', ev => {
    mousedown = false
})

document.querySelector('#clearButton').addEventListener('click', evt => {
    for (const pixelEl of pixels) {
        pixelEl.style.backgroundColor = ''
    }
})