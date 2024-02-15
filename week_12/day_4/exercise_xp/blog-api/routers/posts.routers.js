import { getAllPosts } from '../controllers/posts.controllers.js';
import express from 'express';

export const router = express.Router();

router.get('/', getAllPosts);
