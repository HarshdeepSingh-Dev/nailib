import express from 'express';
import dotenv from 'dotenv';
import authRouter from './api/routes/auth.js';
import connectDB from './config/config.js';

dotenv.config();

const app = express();

connectDB();

const router = express.Router();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello this is our server side");
});

app.use(router);

router.use('/api/auth', authRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`)
});