import { allUsers, login, register } from '../models/users.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv();


export const _register = async (req, res) => {
    const { email, password } = req.body;

    // encrypt password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(String(password), salt);

    try {
        const user = await register(email.toLowerCase(), hash);
        res.status(201).json(user[0]);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

export const _login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const users = await login(email.toLowerCase());

        // check if user exists
        if (users.length === 0) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }
        const user = users[0];

        // check password
        const isMatch = bcrypt.compareSync(String(password), user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.ACCESS_TOKEN_SECERT,
            { expiresIn: '1h' }
        );
        res.cookie('token', token, { httpOnly: true, maxAge: 60*60*1000 });

        res.status(200).json({ id: user.id, email: user.email, token: token });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

export const _allUsers = async (req, res) => {
    try {
        const users = await allUsers();
        res.status(200).json(users);
    } catch (e) {
        console.log(e);
        return res.status(500).json({ msg: 'Internal server error' });
    }
};

export const _logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ msg: 'Logged out successfully' });
};