import express from 'express';
import envs from 'dotenv';
import cors from "cors"
import cookieParser from 'cookie-parser';
import lecHallRoute from './routes/lecHallRoutes.js'
import lecturerRoute from './routes/lecturerRoutes.js'

import { sequelize , connectToDb } from './config/db.js';

const app = express();
const dotenv = envs.config();
const PORT = process.env.PORT || 4000;


// Internal Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors())


// Routes
app.use("/api/v1/lectureHall", lecHallRoute);
app.use("/api/v1/lecturer", lecturerRoute)

// middlewares
// app.use(notFound);
// app.use(errorHandler);

app.listen(PORT,async ()=>{
    console.log(`Server is running on port ${PORT}`);
    await connectToDb();
});