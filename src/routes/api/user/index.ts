import express, { Router } from 'express';
import { register, getUser, login, logout, verifyEmail } from '../../controller/User.controller';
import { loginRequired, emailVerified } from '../../middleware'
const router = Router()

router.post('/register', register);
router.get('/getUser', getUser)
router.post('/login', emailVerified, login)
router.get('/logout', loginRequired, loginRequired, logout)
router.get('/verify-email', verifyEmail)

export default router