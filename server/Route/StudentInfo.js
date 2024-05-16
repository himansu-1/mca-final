// This file is for add and get NOTES
const express = require("express");
const router = express.Router();
const fuzzy = require('fuzzy')
const Student = require("../Models/Student");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../Middlewere/fetchUser");

router.get("/", (req, res) => {
  res.send("HeloWorld");
});
// after login or signup students can add their details using : "http://localhost:5555/api/studentinfo/insertDetails"
router.put(
  "/insertDetails",
  fetchUser,
  [
    // validation parameter settings
    body("passing_year", "Enter  minimum 4 character Description")
      .notEmpty()
      .isLength({ max: 4, min: 4 }),
  ],
  async (req, res) => {
    let success = false;
    try {
      studentId = req.student.id;

      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ success, arrors: error.array() });
      }
      const {
        phone,
        passing_year,
        dob,
        profession,
        address,
        business_organization,
        position,
        website,
        comments,
        profile_img,
      } = req.body;
      const updateStudent = {};
      if (profile_img) {
        updateStudent.profile_img = profile_img;
      }
      if (phone) {
        updateStudent.phone = phone;
      }
      if (passing_year) {
        updateStudent.passing_year = passing_year;
      }
      if (dob) {
        updateStudent.dob = dob;
      }
      if (profession) {
        updateStudent.profession = profession;
      }
      if (address) {
        updateStudent.address = address;
      }
      if (business_organization) {
        updateStudent.business_organization = business_organization;
      }
      if (position) {
        updateStudent.position = position;
      }
      if (website) {
        updateStudent.website = website;
      }
      if (comments) {
        updateStudent.comments = comments;
      }

      let filter = { _id: studentId };
      let student = await Student.findOneAndUpdate(filter, updateStudent, {
        returnOriginal: false,
      });
      success = true;
      res.status(201).json({ success, student, studentId });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success, Response: "Some Error Occured.." });
    }
  }
);

// Here all Student informations are fetched using "http://localhost:5555/api/studentinfo/getAllStudents"
router.get("/getAllStudents", async (req, res) => {
  try {
    const { address, name, sort, select, passing_year } = req.query;
    const queryObject = {};
    if (address) {
      queryObject.address = address;
    }
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }
    if (passing_year) {
      queryObject.passing_year = passing_year;
      // queryObject.passing_year=parseInt(passing_year)
    }
    if (sort) {
      let sortFix = sort.replace(",", " ");
      queryObject.name = sort;
    }
    if (select) {
      let selectFix = select.split(",").join(" ");
    }
    console.log(queryObject);
    let success = false;
    const final = await Student.find(queryObject).select("-password");
    res.json(final);
  } catch (error) {
    console.log(error);
    res.status(500).send("Some Error Occured..");
  }
});

// Here Student can delete an existing Note using a NOTES ID "http://localhost:5555/api/studentinfo/deleteStudent"
router.delete("/deleteStudent", fetchUser, async (req, res) => {
  let success = false;
  try {
    studentId = req.student.id;
    let student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ success, Response: "Student not found" });
    }
    if (student.id.toString() !== studentId) {
      return res.status(401).send("Not Allowed");
    }
    student = await Student.findByIdAndDelete(studentId);
    success = true;
    res.json({ success, Response: "successfully note was deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success, Response: "Some Error Occured.." });
  }
});

// Student informations fetched using its ID "http://localhost:5555/api/studentinfo/getbyid/:id"
router.get("/getbyid/:id", async (req, res) => {
  try {
    const final = await Student.findById(req.params.id.slice(1)).select(
      "-password"
    );
    res.json(final);
  } catch (error) {
    console.log(error);
    res.status(500).send("Some Error Occured..");
  }
});



router.get('/search', async (req, res) => {
    const { name, address, business_organization } = req.query;
    try {
        const items = await Student.find({});
        
        let results = items;
        
        if (name) {
        //   cosnole.log("\n\n\n\n")
        const nameOptions = {
          extract: el => el.name || '',
        };
        results = fuzzy.filter(name, results, nameOptions).map(el => el.original);
        // console.log(results)
      }
  
      if (address) {
        const addressOptions = {
          extract: el => el.address || '',
        };
        results = fuzzy.filter(address, results, addressOptions).map(el => el.original);
        // console.log(results1)
      }
  
      if (business_organization) {
        const business_organizationOptions = {
          extract: el => el.business_organization || '',
        };
        results = fuzzy.filter(business_organization, results, business_organizationOptions).map(el => el.original);
        // console.log(results2)
      }

      res.status(201).json(results);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

module.exports = router;