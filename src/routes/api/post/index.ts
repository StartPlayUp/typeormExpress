import express, { Router } from 'express';
import { sendPost, likeIt } from '../../controller/Post.controller';
const router = Router()

router.post('/sendPost', sendPost);
router.put('/likeIt', likeIt);

export default router