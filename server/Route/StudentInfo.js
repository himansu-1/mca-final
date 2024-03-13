// This file is for add and get NOTES
const express = require("express")
const router = express.Router()
// const Note = require("../Models/Student")
const Student = require("../Models/Student")
const { body, validationResult } = require('express-validator');
const fetchUser = require("../Middlewere/fetchUser")


// after login or signup students can add their details using : "http://localhost:5555/api/studentinfo/insertDetails"
router.put("/insertDetails" , fetchUser ,
[
    // validation parameter settings
    body('phone',        "Enter a valid phone number").notEmpty().isLength({ min: 6 }),
    body('passing_year', "Enter  minimum 4 character Description").notEmpty().isLength({ max: 4 , min:4 }),
    body('dob',          "Enter  minimum 4 character Title"),
    body('profession',   "Enter  minimum 3 character Description").isLength({ min: 3 }),
    body('address',      "Enter  minimum 4 character Title").notEmpty(),
    body('business_organization', "Enter  minimum 2 character Description").isLength({ min: 2 }),
    body('position',              "Enter  minimum 4 character Title").isLength({ min: 4 }),
    body('website',               "Enter  minimum 4 character Description")
],
 async (req,res)=>{
     let success = false
    try {
        studentId = req.student.id

        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.status(400).json({success, arrors: error.array() })
        }
        const {phone,passing_year,dob,profession,address,business_organization,position,website,comments,profile_img} = req.body
        const updateStudent = {}
        if (profile_img)          { updateStudent.profile_img = profile_img}
        if (phone)                { updateStudent.phone = phone}
        if (passing_year)         { updateStudent.passing_year = passing_year}
        if (dob)                  { updateStudent.dob = dob}
        if (profession)           { updateStudent.profession = profession}
        if (address)              { updateStudent.address = address}
        if (business_organization){ updateStudent.business_organization = business_organization}
        if (position)             { updateStudent.position = position}
        if (website)              { updateStudent.website = website}
        if (comments)             { updateStudent.comments = comments}

        
        let filter={_id:studentId}
        let student = await Student.findOneAndUpdate(filter , updateStudent, {
            returnOriginal: false
        });
        success = true
        res.status(201).json({success,student,studentId})
    } catch (error) {
        console.log(error)
        res.status(500).json({success,Response:"Some Error Occured.."})
    }
})


// Here all Student informations are fetched using "http://localhost:5555/api/studentinfo/getAllStudents"
router.get("/getAllStudents",
async (req,res)=>{
    try {
        const {address,name,sort,select,passing_year} = req.query
        const queryObject = {}
        if (address) {
            queryObject.address=address
        }
        if (name) {
            queryObject.name={$regex:name, $options:"i"}
        }
        if (passing_year) {
            queryObject.passing_year=passing_year
            // queryObject.passing_year=parseInt(passing_year)
        }
        if (sort) {
            let sortFix = sort.replace(","," ")
            queryObject.name=sort
        }
        if (select) {
            let selectFix = select.split(",").join(" ")
        }
        console.log(queryObject)
        let success = false
        const final = await Student.find(queryObject).select("-password")
        res.json(final)
    } catch (error) {
        console.log(error)
            res.status(500).send("Some Error Occured..")
    }
})



// Here Student can delete an existing Note using a NOTES ID "http://localhost:5555/api/studentinfo/deleteStudent"
router.delete("/deleteStudent",fetchUser,
async (req,res)=>{
    let success = false
    try {
        studentId = req.student.id
        let student = await Student.findById(studentId)

        if (!student) {return res.status(404).json({success,Response:"Student not found"})}
        // console.log(student.id.toString())
        // console.log(studentId)
        if (student.id.toString() !== studentId) {
            return res.status(401).send("Not Allowed")
        }
        student = await Student.findByIdAndDelete(studentId)
        success = true
        res.json({success,Response:"successfully note was deleted" })
    } catch (error) {
        console.log(error)
            res.status(500).json({success,Response:"Some Error Occured.."})
    }
})


// Student informations fetched using its ID "http://localhost:5555/api/studentinfo/getbyid/:id"
router.get("/getbyid/:id",
async (req,res)=>{
    try {
        const final = await Student.findById(req.params.id.slice(1)).select("-password")
        res.json(final)
    } catch (error) {
        console.log(error)
            res.status(500).send("Some Error Occured..")
    }
})
// // Here all Notes are inserted using "http://localhost:5000/api/notes/insertNotes"
// router.post("/insertNotes" , fetchUser ,[
//     // validation parameter settings
//     body('title', "Enter  minimum 4 character Title").notEmpty().isLength({ min: 4 }),
//     body('description', "Enter  minimum 4 character Description").isLength({ min: 4 })
// ], async (req,res)=>{
//     try {
//         let success = false
//         const {title,description,tag} = req.body
//         // input notes validation checked
//         const error = validationResult(req)
//         if (!error.isEmpty()) {
//             return res.status(400).json({success, arrors: error.array() })
//         }
//         // input note saved in out NOOTES Schema including user ID
//         const notes = new Note({
//             title,description,tag,user:req.user.id
//         })
//         const saveNotes = await notes.save()
//         res.json(saveNotes)
        
//     } catch (error) {
//         console.log(error)
//         res.status(500).send("Some Error Occured..")
//     }
// })

// // Here all Notes are fetched using "http://localhost:5000/api/notes/fetchAllNotes"
// router.get("/fetchAllNotes",fetchUser,
// async (req,res)=>{
//     try {
//         // ALl notes are fetched by the help of User ID
//         const notes = await Note.find({user:req.user.id})
//         res.json(notes)
//     } catch (error) {
//         console.log(error)
//             res.status(500).send("Some Error Occured..")
//     }
// })


// // Here we can update a Note using a NOTES ID "http://localhost:5000/api/notes/updateNotes/:id"
// router.put("/updateNotes/:id",fetchUser,
// async (req,res)=>{
//     try {
//         const {title,description,tag} = req.body
//         const newNote = {}
//         if (title) { newNote.title = title}
//         if (description) { newNote.description = description}
//         if (tag) { newNote.tag = tag}
//         let note = await Note.findById(req.params.id)

//         if (!note) {return res.status(404).send("Note not found")}
//         if (note.user.toString() !== req.user.id) {
//             return res.status(401).send("Not Allowed")
//         }
//         note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, {new: true })
//         res.json({ note })



//     } catch (error) {
//         console.log(error)
//             res.status(500).send("Some Error Occured..")
//     }
// })


// // Here we can delete an existing Note using a NOTES ID "http://localhost:5000/api/notes/deleteNotes/:id"
// router.delete("/deleteNotes/:id",fetchUser,
// async (req,res)=>{
//     try {
//         let note = await Note.findById(req.params.id)

//         if (!note) {return res.status(404).send("Note not found")}
//         if (note.user.toString() !== req.user.id) {
//             return res.status(401).send("Not Allowed")
//         }
//         note = await Note.findByIdAndDelete(req.params.id)
//         res.json({ "Success":"successfully note was deleted",note:note })



//     } catch (error) {
//         console.log(error)
//             res.status(500).send("Some Error Occured..")
//     }
// })

module.exports = router