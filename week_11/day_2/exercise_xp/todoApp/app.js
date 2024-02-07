const TodoList = require('./todo');

const todoList = new TodoList();
todoList.addTask('Buy milk');
todoList.addTask('Do homework');
todoList.addTask('Go for a walk');

todoList.markComplete('Buy milk');
todoList.markComplete('Go for a walk');

todoList.listAllTasks();