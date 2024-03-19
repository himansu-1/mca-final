import React, { useState } from "react";
import StudentContext from "./StudentContext";
import axios from "axios";

const StudentState = (props) => {
  const [Student, setStudent] = useState([]);
  const [showHeader,setShowHeader] = useState("")

  // getting all notes from DB
  const getStudentinfo = async (year) => {
    try {
      const url = `http://localhost:4000/api/studentinfo/getAllStudents/?passing_year=${
        year ? year : ""
      }`;
      const data = await axios.get(url);
      setStudent(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // getting all notes from DB
  const getStudentbyID = async (ID) => {
    try {
      const url = `http://localhost:4000/api/studentinfo/getbyid/:${ID}`;
      const data = await axios.get(url);
      // setStudent(data.data);
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  // inserting Student details : it use during ;
  // ---> Edit the Login Profile
  // ---> And while the signup works(used inside the Registration of profile)
  const insertDetails = async (
    name,
    email,
    address,
    business_organization,
    comments,
    dob,
    passing_year,
    phone,
    position,
    profession,
    website,
    profile_img,
    token
  ) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/studentinfo/insertDetails`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
          body: JSON.stringify({
            name,
            email,
            address,
            business_organization,
            comments,
            dob,
            passing_year,
            phone,
            position,
            profession,
            website,
            profile_img,
          }),
        }
      );
      const result = await response.json();
      return result.success
    } catch (error) {
      console.log(error);
    }
  };

  // It get the student details using the token
  // ===> used inside the Edit Profile to update the previous data of student
  const getStudent = async (token) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/student/getUser`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        }
      );
      const result = await response.json();
      // console.log(result.student);
      return result.student;
      // setCredentials(result.student);
    } catch (error) {
      console.log(error);
    }
  };

  // it delete the student
  const deleteStudent = async (token) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/studentinfo/deleteStudent`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token,
          },
        }
      );
      const result = await response.json();
      console.log(result);
      return result.success;
    } catch (error) {
      console.log(error);
    }
  };

  // This is login form setup it saves the Auth-Toke in the localStorage 
  const studentLogin = async (email,password) => {
    try {
      const response = await fetch(`http://localhost:4000/api/student/login`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const result = await response.json();
      result.success?  localStorage.setItem("token", result.authToken):alert("Enter valid credentials")
      return result.success
    } catch (error) {
      console.log(error);
    }
  };

  // This is login form setup it saves the Auth-Toke in the localStorage 
  const studentSignup = async (name,email,password)=>{
    try {
        const response = await fetch(`http://localhost:4000/api/student/CreateUser`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                name:name,
                email:email,
                password:password
            })
        })
        const result = await response.json()
        if (result.success) {
          localStorage.setItem("token",result.authToken)
          localStorage.setItem("name",name)
          localStorage.setItem("email",email)
          return result.success
        }else{
          console.log(result.error)
          return result.success
        }
    } catch (error) {
      console.log(error)
    }
}

// // This is changing function of Admin site 
const changeAdminOptions = async(adminResult)=>{
  try {
    const response = await fetch(
      `http://localhost:4000/aadmin/home/webPageOptions/editing/${localStorage.getItem("Admin-token")}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adminResult),
      }
    );
    const result = await response.json();
    // console.log(adminResult)
    // console.log(result)
    return result.success
  } catch (error) {
    console.log(error);
  }
}

// This is only GET option of Admin which get all the images and data "when login"
const getAdminOptions = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/aadmin/home/webPageOptions/${localStorage.getItem("Admin-token")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      // console.log(result.result)
      // console.log(result)
      return result.result
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <StudentContext.Provider
      value={{
        getStudentinfo,
        Student,
        setStudent,
        getStudentbyID,
        insertDetails,
        getStudent,
        deleteStudent,
        studentLogin,
        studentSignup,
        showHeader,
        setShowHeader,
// These are Admin components
        changeAdminOptions,
        getAdminOptions,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
