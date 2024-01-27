const getRobotCardHTML = (robotName, robotEmail, robotAvatar) =>{
    return `<div class='card'><div class="card-container">
        <div class="avatar"><img src="${robotAvatar}' alt="${robotName}"></div>
        <div class='name'>${robotName}</div>
        <div class='email'>${robotEmail}</div>
    </div></div>`
}

const findRobots = query => {
    if (query) {
        return robots.filter(robot => robot.name.toLowerCase().includes(query.toLowerCase()))
    } else {
        return robots
    }
}

const showRobots = () => {
    let query = document.querySelector('input').value
    let container = document.querySelector('.main')
    container.innerHTML = ''
    findRobots(query).forEach(r => {
        container.innerHTML += getRobotCardHTML(r.name, r.email, r.image)
    })
}

window.addEventListener("load", () => showRobots())

document.querySelector('form').addEventListener('submit', ev => ev.preventDefault())
document.querySelector('input').addEventListener('input', () => {
    showRobots();
})