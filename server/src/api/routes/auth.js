import express from 'express';
import { register, signin } from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post('/signin', signin);
authRouter.post('/register', register);

export default authRouter;