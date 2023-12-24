// 🌟 Exercice 4 : Volume Of A Sphere
// Instructions
// Write a JavaScript program to calculate the volume of a sphere.

const form = document.querySelector('form')
const inputRadius = document.querySelector('input#radius')
const inputVolume = document.querySelector('input#volume')

function calculateSphereVolume(radius) {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

function validate(value) {
    if (isNaN(value)) {
        inputRadius.setCustomValidity('Radius must be a number')
        return false
    } else if (value === 0) {
        inputRadius.setCustomValidity('Radius must be greater than 0')
        return false
    } else {
        inputRadius.setCustomValidity('')
        return true
    }
}

inputRadius.addEventListener('input', () => {
    const radius = Number(inputRadius.value)
    validate(radius)
})

form.addEventListener('submit', ev => {
    ev.preventDefault()
    const radius = Number(inputRadius.value)
    if (validate(radius)) {
        inputVolume.value = calculateSphereVolume(inputRadius.value)
    }
})