class TodoList{
    constructor() {
        this.tasks = {};
    }
    addTask (name) {
        this.tasks[name] = false;
    }
    markComplete (name) {
        this.tasks[name] = true;
    }
    listAllTasks () {
        console.log(this.tasks);
    }
}

module.exports = TodoList;