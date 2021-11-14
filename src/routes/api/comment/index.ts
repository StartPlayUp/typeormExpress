import express, { Router } from 'express';
import { sendMemberComment, sendNonMemberComment } from '../../controller/Comment.controller';
const router = Router()

router.post('/sendMemberComment', sendMemberComment);
router.post('/sendNonMemberComment', sendNonMemberComment);


export default router