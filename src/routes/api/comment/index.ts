import express, { Router } from 'express';
import {
    sendMemberComment,
    sendNonMemberComment,
    getComments
} from '../../controller/Comment.controller';
const router = Router()

router.post('/sendMemberComment', sendMemberComment);
router.post('/sendNonMemberComment', sendNonMemberComment);
router.get('/getComments', getComments);


export default router