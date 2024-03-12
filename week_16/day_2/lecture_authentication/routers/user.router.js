import express from 'express';
import { _login, _register, _allUsers } from '../controllers/users.controller.js';

const router = express.Router();

router.post('/register/', _register);
router.post('/login/', _login);
router.get('/', _allUsers)

export default router;