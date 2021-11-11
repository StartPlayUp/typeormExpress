import express, { Router } from 'express';
import { register } from '../../../controller/User.controller';
const router = Router()

router.post('/register', register);

export default router