import fs from 'node:fs/promises';

const getData = async () => {
    try {
        const file = await fs.readFile('config/db.json');
        return JSON.parse(file);
    } catch (e) {
        throw e;
    }
};

const saveData = (data) => {
    return fs.writeFile('config/db.json', JSON.stringify(data));
};

const getNextID = (data) => {
    const ids = data.map(task => task.id);
    let id = 0;
    while (ids.includes(id)) {
        id++;
    }
    return id;
};

export const _deleteTaskByID = (id) => {
    return new Promise((resolve, reject) => {
        getData()
            .then(async data => {
                const taskIndex = data.findIndex(task => task.id === id);
                const task = data.splice(taskIndex, 1);
                await saveData(data);
                resolve(task[0]);
            })
            .catch(e => {
                reject(e);
            });
    });
};

export const _changeTaskByID = (id, newTaskData) => {
    return new Promise((resolve, reject) => {
        getData()
            .then(async data => {
                const taskIndex = data.findIndex(task => task.id === id);
                if (taskIndex === -1) {
                    resolve(null);
                }
                data[taskIndex] = { id, ...newTaskData };
                await saveData(data);
                resolve(data[taskIndex]);
            })
            .catch(e => {
                reject(e);
            });
    });
};

export const _addNewTask = (name, description) => {
    return new Promise((resolve, reject) => {
        getData().then(async data => {
            const newTask = { id: getNextID(data), name, description };
            data.push(newTask);
            await saveData(data);
            resolve(newTask);
        })
            .catch(e => {
                reject(e);
            });
    });
};

export const _getTaskByID = (id) => {
    return new Promise((resolve, reject) => {
        getData().then(data => {
            const task = data.find(task => task.id === id);
            resolve(task);
        })
            .catch(e => reject(e));
    });
};

export const _getAllTasks = () => {
    return new Promise((resolve, reject) => {
        getData().then(data => {
            resolve(data);
        }).catch(e => reject(e));
    });
};
