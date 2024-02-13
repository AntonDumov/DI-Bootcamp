import express from 'express';
import { getQuestion, getScore, postAnswer } from '../controllers/quiz.js';


export const router = express.Router();

router.get('/', getQuestion);

router.post('/', postAnswer);

router.get('/score/', getScore);
