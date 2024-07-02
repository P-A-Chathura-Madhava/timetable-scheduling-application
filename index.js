import express from 'express';
import envs from 'dotenv';
import cookieParser from 'cookie-parser';

import { sequelize , connectToDb } from './config/db.js';

const app = express();
const dotenv = envs.config();
const PORT = process.env.PORT || 4000;

// Default Entry Point
app.use('/', (req, res) => {
    res.send("Server Response");
})

// Internal Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
// app.use("/api/v1/user", authRoute);

// middlewares
// app.use(notFound);
// app.use(errorHandler);

app.listen(PORT,async ()=>{
    console.log(`Server is running on port ${PORT}`);
    await connectToDb();
});