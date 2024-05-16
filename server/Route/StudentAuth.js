const express = require("express")
const router = express.Router()
const Student = require("../Models/Student")
const { body, validationResult } = require('express-validator');

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const JWT_SIGN = "Himansu@2001"
const fetchUser = require("../Middlewere/fetchUser")


// ~~~~~~~~~~~ This is my -1st Create User Router "http://localhost:5555/api/student/CreateUser" ~~~~~~~~~~~~~
router.post("/CreateUser"
    , [
        // Here validation checking occure
        body('name', "Enter a valid Name").notEmpty().isLength({ min: 4 }),
        body('email', "Enter a valid E-mail").isEmail(),
        body('password', "Enter a valid Password").notEmpty().isLength({ min: 4 })
    ]
    , async (req, res) => {
        let success = false
        const error = validationResult(req);
        // if the validationResult throw any error the given if statement works
        if (!error.isEmpty()) {
            return res.status(400).json({ success, arrors: error.array() })
        }
        try {
            // here the duplicate email checking occure
            const student_copy = await Student.findOne({ email: req.body.email });
            if (student_copy) {
                return res.json({ success, error: "This E-mail is already exist..~~~" })
            }

            // Here the Hashing password occured using 'bcryptjs'
            const salt = await bcrypt.genSalt(10)
            const finalPassword = await bcrypt.hash(req.body.password, salt)
            // here the final user created
            const student = await Student.create({
                name: req.body.name,
                // password: req.body.password,
                password: finalPassword,
                email: req.body.email,
            })

            // final Authentication occured using 'josnwebtoken'
            const data = {
                student: {
                    id: student.id
                }
            }
            success = true
            const authToken = jwt.sign(data, JWT_SIGN)

            // printing the final user inputed result
            // res.json({finalPassword,user,authToken})
            res.json({ success, authToken })

        } catch (error) {
            console.log(error)
            res.status(500).send("Some Error Occured..")
        }
    })


// ~~~~~~~~~~~ This is my -2nd Login User Router "http://localhost:5555/api/student/login" ~~~~~~~~~~~~~
router.post("/login"
    , [
        // Here the proper valid email and password cheing
        body('email', "Enter a valid E-mail").isEmail().exists(),
        body('password', "Enter a valid Password").exists()
    ]
    , async (req, res) => {
        // if the validationResult throw any error the given if statement works
        let success = false
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ success, arrors: error.array() })
        }
        // taking user input of email and password
        const { email, password } = req.body
        try {

            // checking valid email entered or not
            let student = await Student.findOne({ email })
            if (!student) {
                return res.status(400).json({ success, error: "Email Account not match" })
            }

            // checking valid password entered or not
            const verifyPassword = await bcrypt.compare(password, student.password)
            if (!verifyPassword) {
                return res.status(400).json({ success, error: "Please enter a correct Password" })
            }

            // final Authentication occured using 'josnwebtoken'
            const data = {
                student: {
                    id: student.id
                }
            }
            success = true
            const authToken = jwt.sign(data, JWT_SIGN)

            // printing the final user inputed result
            res.json({ success, authToken })
            console.log(success)

        } catch (error) {
            console.log(error)
            res.status(500).send("Some Error Occured..")
        }
    })


// ~~~~~~~~~~~ This is my -3rd Get Logedin User Details Router "http://localhost:5555/api/student/getUser" ~~~~~~~~~~~~~
router.get("/getUser", fetchUser, async (req, res) => {

    try {
        const success = true
        studentId = req.student.id
        const student = await Student.findById(studentId).select("-password")
        res.json({ student, success })
    } catch (error) {
        console.log(error)
        res.status(500).send("Some Error Occured..")
    }
})




module.exports = router