import express from 'express';
import { addLecturer, getALecturer, updateALecturer,deletelecturer} from '../controller/lecturerController.js';

const router = express.Router()

router.post("/add-Lecturer", addLecturer)
router.get("/get-Lecturer", getALecturer)
router.post("/update-Lecturer", updateALecturer)
router.post("/delete-Lecturer", deletelecturer)




export default router;