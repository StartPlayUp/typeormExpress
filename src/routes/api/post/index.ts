import express, { Router } from 'express';
import { sendPost } from '../../controller/Post.controller';
const router = Router()

router.post('/sendPost', sendPost);

export default router