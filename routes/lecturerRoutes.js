import express from 'express';
import { addLecturer } from '../controller/lecturerController.js';

const router = express.Router()

router.post("/add-Lecturer", addLecturer)



export default router;