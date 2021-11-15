import express, { Router } from 'express';
import { register, getUser } from '../../controller/User.controller';
const router = Router()

router.post('/register', register);
router.get('/getUser', getUser)

export default router