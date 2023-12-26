// In your Javascript file add the functionality which will allow you to drag the box and drop it into the target.
// Check out the Course Notes named DOM animations.

const box = document.getElementById('box')
const target = document.getElementById('target')

box.draggable = true

target.addEventListener('dragover', ev => {
    ev.preventDefault()
})

box.addEventListener('dragstart', ev => {
    ev.dataTransfer.setData("text", ev.target.id)
})

target.addEventListener('drop', ev => {
    ev.preventDefault()
    ev.target.appendChild(document.getElementById(ev.dataTransfer.getData("text")))
})