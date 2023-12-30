const tasks = []
let currentId = 0
const addTaskButton = document.getElementById('addTaskButton')
const addTaskInput = document.getElementById('addTaskInput')
const tasksContainer = document.querySelector('.list-tasks')

addTask = function () {
    if (addTaskInput.value !== '') {
        const newTask = {
            taskId: currentId,
            text: addTaskInput.value,
            done:false
        }

        const taskDiv = document.createElement('div')
        taskDiv.dataset['taskId'] = newTask.taskId
        taskDiv.classList.add('task')
        taskDiv.innerHTML = `<button><i class="fa fa-times" aria-hidden="true"></i></button><input type="checkbox"><span class="task-text">${newTask.text}</span>`

        tasksContainer.appendChild(taskDiv)

        taskDiv.children.item(0).addEventListener('click', deleteTask)
        taskDiv.children.item(1).addEventListener('change', doneTask)

        tasks.push(newTask)
        currentId += 1
    }
}

doneTask = function (ev) {
    const taskElement = ev.target.closest('.task');
    const taskId = parseInt(taskElement.dataset['taskId'])
    tasks.find(task => task.taskId === taskId).done = true;
    taskElement.classList.add('task-done')
    ev.target.disabled = true
}

deleteTask = function (ev) {
    const taskElement = ev.target.closest('.task');
    const taskId = parseInt(taskElement.dataset['taskId'])
    tasks.splice(tasks.findIndex(task => task.taskId === taskId), 1)

    taskElement.remove()
}

addTaskButton.addEventListener('click', addTask)
