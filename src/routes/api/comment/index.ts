import express, { Router } from 'express';
import { sendMemberComment, sendNonMemberComment } from '../../controller/Comment.controller';
const router = Router()

router.post('/sendPost', sendMemberComment);
router.post('/sendPost', sendNonMemberComment);


export default router