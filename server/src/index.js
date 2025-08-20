import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.get('/',(req, res)=>{
    res.send("Hello this is our server side");
});

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
console.log(`Server is running on PORT:${PORT}`)
});
