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

// get a lecturer

const getALecturer = asyncHandler(async(req,res)=>{

    const lecturerId = req.params._id;

    const lecturer = await lecturerId.findOne({
        where: {
            id: lecHallId
        }
    })

    res.status(200).json(lecturer);
})

// update a lecturer
const updateALecturer = asyncHandler(async(req,res)=>{

    const lecturerId = req.params._id;   
    
    const lecturer = await lecturer.findOne({
        where: {
            id: lecturerId
        }
    })

    const updatedFields = {};
    if (req.body.name !== undefined) {
        updatedFields.name = req.body.name;
    }
    if (req.body.department !== undefined) {
        updatedFields.department = req.body.department;
    }
    if (req.body.contactDetails !== undefined) {
        updatedFields.contactDetails = req.body.contactDetails;
    }

    await lecturer.set(updatedFields);

    await lecturer.save();
    
    res.status(200).json(lecHall);

})

// delete a lec hall
const deletelecturer = asyncHandler(async(req,res)=>{

    const lecturerId = req.params._id; 

    const lecturer = await lecturer.findOne({
        where: {
            id: lecturerId
        }
    })

    await lecturer.destroy();

    res.status(204).json({message: 'lecturer deleted'});
})



export {addLecturer,getALecturer,updateALecturer,deletelecturer}