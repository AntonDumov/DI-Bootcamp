const JSONStorage = require('../config/jsonstorage');

const getAllUsers = (req, res) => {
    res.json(JSONStorage.read());
};

const getUserByID = (req, res) => {
    const data = JSONStorage.read();
    const user = data.find(u => u.id === Number(req.params.id));
    if (!user) {
        return res.status(404).send();
    }
    res.json(user);
};

const changeUserByID = (req, res) => {
    const id = Number(req.params.id);
    const data = JSONStorage.read();
    const user = data.find(u => u.id === id);
    if (!user) {
        return res.status(404).send();
    }
    JSONStorage.update(id, req.body);
    res.json({ id, ...req.body });
};

const login = (req, res) => {
    
};