import dotenv from 'dotenv'
import express, { json } from 'express'
import cors from 'cors'
import { dbConfig } from './config/dbConfig.js';

import authRoute from './src/routes/authRoute.js'
import userRoute from './src/routes/userRoute.js'


dotenv.config();

const app = express();

// Middleware to set COOP and COEP headers
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "unsafe-none");
    next();
});

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://online-course-sand.vercel.app'
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials:true
}));

app.use(express.json());

//connect to db 
dbConfig();

//define Routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user',userRoute)


const PORT=process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}✅ `)
})



