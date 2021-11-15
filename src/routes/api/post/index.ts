import express, { Router } from 'express';
import { sendPost, likeIt, getLikeIt } from '../../controller/Post.controller';
const router = Router()

router.post('/sendPost', sendPost);
router.put('/likeIt', likeIt);
router.get('/getLikeIt', getLikeIt);


export default router