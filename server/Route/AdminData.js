const express = require("express")
const router = express.Router()
// const Note = require("../Models/Student")
const Admin = require("../Models/Admin")
const { body, validationResult } = require('express-validator');
const fetchAdmin = require("../Middlewere/fetchAdmin")
const fetchAdminParams = require("../Middlewere/fetchAdminParams")

// after login or signup students can add their details using : "http://localhost:5555/api/studentinfo/insertDetails"
router.put("/webPageOptions/editing/:token" , fetchAdminParams ,
 async (req,res)=>{
     let success = false
    try {
        adminId = req.admin.id
        
        const {homeCarousel,studentCarousel,stafData} = req.body
        const updateAdmin = {}
        if (homeCarousel)     { updateAdmin.homeCarousel = homeCarousel}
        if (studentCarousel)  { updateAdmin.studentCarousel = studentCarousel}
        if (stafData)         { updateAdmin.stafData = stafData}

        
        let filter={_id:adminId}
        let admin = await Admin.findOneAndUpdate(filter , updateAdmin, {
            returnOriginal: false
        });
        success = true
        res.status(201).json({success,admin,adminId})
    } catch (error) {
        console.log(error)
        res.status(500).json({success,Response:"Some Error Occured here.."})
    }
})

router.get("/webPageOptions/:token" , fetchAdminParams ,
 async (req,res)=>{
     let success = false
    try {
        adminId = req.admin.id
        const result = await Admin.findById(adminId).select("-password")
        success=true
        res.json({success,result})
    } catch (error) {
        console.log(error)
            res.status(500).send("Some Error Occured..")
    }
})

router.get("/webPageOptions" ,
 async (req,res)=>{
     let success = false
    try {
        // adminId = req.admin.id
        const result = await Admin.find({}).select("-password -email -name")
        success=true
        res.json({success,result})
    } catch (error) {
        console.log(error)
            res.status(500).send("Some Error Occured..")
    }
})

module.exports = router