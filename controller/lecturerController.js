import asyncHandler from "express-async-handler";
import lecturerModel from "../models/lecturerModel.js"

// add lecturer

const addLecturer = asyncHandler(async(req,res)=>{

    const {lecid, name, department, contactDetails} = req.body;

    const newLecturer = lecturerModel.build({
        'lecid': lecid,
        'name': name,
        'department' : department,
        'contactDetails' : contactDetails

      
    })

    try {
        await newLecturer.save();
        res.status(201).json(newLecturer);
    } catch (error) {
        res.json(error);
    }
})


export {addLecturer}