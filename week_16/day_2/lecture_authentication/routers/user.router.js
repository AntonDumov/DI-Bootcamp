import express from 'express';
import { _login, _register, _allUsers, _logout } from '../controllers/users.controller.js';
import { verifyToken } from '../middleware/verifytoken.js';

const router = express.Router();

router.post('/register/', _register);
router.post('/login/', _login);
router.get('/', verifyToken, _allUsers);
router.get('/logout', _logout);
router.get('/verify', verifyToken, (req, res) => {
    res.sendStatus(200);
});

export default router;