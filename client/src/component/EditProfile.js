import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./component styling/EditProfile.css"
import StudentContext from "../contextstate/StudentContext";

const EditProfile = () => {
  const navigate = useNavigate();
  const context = useContext(StudentContext)
  const {insertDetails , getStudent , deleteStudent} = context
  const { token } = useParams();

  const [credentials, setCredentials] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    insertDetails(
      credentials.name,
      credentials.email,
      credentials.address,
      credentials.business_organization,
      credentials.comments,
      credentials.dob,
      credentials.passing_year,
      credentials.phone,
      credentials.position,
      credentials.profession,
      credentials.website,
      credentials.profile_img,token
    ).then((resolve)=>{
      if (resolve) {
        alert("Successfulley Edited the Student form...");
        navigate("/")
      }else{alert("Error")}
    })
  };

  const handleDelete = ()=>{
    deleteStudent(token).then((resolve)=>{
      if(resolve){
        alert("Deleted your account successfully")
        localStorage.removeItem("token") 
        localStorage.removeItem("name") 
        localStorage.removeItem("email")
        navigate("/")
      }else{alert("Something wend wrong")}
    })
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleUpload= async (e)=>{
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setCredentials({...credentials,profile_img:base64})
  }

  const handleReset=()=>{
    this.setCredentials({
      name:this.credentials.name,
      email:this.credentials.email,
      address:'',
      business_organization:'',
      comments:'',
      dob:'',
      passing_year:'',
      phone:'',
      position:'',
      profession:'',
      website:'',
      profile_img:'',
    })
  }
  useEffect(() => {
    getStudent(token).then((resolve)=>{setCredentials(resolve)})
    // eslint-disable-next-line
  }, [token]);
  return (
    // {/*         This is Registration Form which used after Signup and also we can edit           */}
    <div className="container">
      <div className="d-flex justify-content-between my-3">
      <h2>Student Details Edit From</h2>
      <button className="delete px-3 py-1" onClick={handleDelete}><h2><i className="fa-solid fa-trash"></i></h2></button>

      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input-field rounded">
            <label>Upload Profile Picture</label>
            <i className="fa fa-upload icon"></i>
            <label htmlFor="Profile-upload" className="rounded"
              style={{height:"200px", width:"200px", right:"20px"}} >
              <img className="profile-upload-image" src={credentials.profile_img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt=""/>
            </label>
            <input 
              type="file" 
              label="Profile" 
              id="Profile-upload" 
              accept=".jpeg .png .jpg" 
              className="" 
              onChange={handleUpload}
            />
        </div> 

        <div className="input-field">
          <label>Name</label>
          <i className="fa fa-user icon"></i>
          <input
            type="text"
            className="inputs"
            name="name"
            value={credentials.name}
            onChange={onChange}
            readOnly
          />
        </div>
        <div className="input-field">
          <label>Email</label>
          <i className="fa fa-envelope icon"></i>
          <input
            type="email"
            className="inputs"
            name="email"
            value={credentials.email}
            onChange={onChange}
            readOnly
          />
        </div>
        <div className="input-field">
          <label>Phone No</label>
          <i className="fa fa-phone icon"></i>
          <input
            type="number"
            className="inputs"
            name="phone"
            value={credentials.phone}
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <label>Passing Year</label>
          <i className="fa-solid fa-people-roof icon"></i>
          <input
            type="text"
            className="inputs"
            name="passing_year"
            value={credentials.passing_year}
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <label>Date of Birth</label>
          <i className="fa-solid fa-people-roof icon"></i>
          <input
            type="date"
            className="inputs"
            name="dob"
            value={credentials.dob}
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <label className="message">Address</label>
          <i className="fa-solid fa-address-book icon textarea-icon"></i>
          <input
            type="text"
            className="inputs"
            name="address"
            value={credentials.address}
            onChange={onChange}
          />
          {/* <textarea className="textarea" name="address" value={credentials.address} onChange={onChange}></textarea> */}
        </div>
        <div className="input-field">
          <label>Business / Organization</label>
          <i className="fa-solid fa-people-roof icon"></i>
          <input
            type="text"
            className="inputs"
            name="business_organization"
            value={credentials.business_organization}
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <label>Position</label>
          <i className="fa-solid fa-people-roof icon"></i>
          <input
            type="text"
            className="inputs"
            name="position"
            value={credentials.position}
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <label>Profession</label>
          <i className="fa-solid fa-people-roof icon"></i>
          <input
            type="text"
            className="inputs"
            name="profession"
            value={credentials.profession}
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <label>Website</label>
          <i className="fa-solid fa-people-roof icon"></i>
          <input
            type="text"
            className="inputs"
            name="website"
            value={credentials.website}
            onChange={onChange}
          />
        </div>
        <div className="input-field">
          <label>Comments</label>
          <i className="fa-solid fa-people-roof icon"></i>
          <input
            type="text"
            className="textarea"
            name="comments"
            value={credentials.comments}
            onChange={onChange}
          />
          {/* <textarea className="textarea" name="comments" value={credentials.comments} onChange={onChange}></textarea> */}
        </div>
        {/* <div className="input-field rounded">
            <label>Upload Profile Picture</label>
            <i className="fa fa-upload icon"></i>
            <label htmlFor="Profile-upload" className="rounded"
              style={{height:"200px", width:"200px", right:"20px"}} >
              <img className="profile-upload-image" src={credentials.profile_img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt=""/>
            </label>
            <input 
              type="file" 
              label="Profile" 
              id="Profile-upload" 
              accept=".jpeg .png .jpg" 
              className="" 
              onChange={handleUpload}
            />
        </div>  */}

        {/* <div className="input-field">
                      <label className="gender">Gender</label>
                      <input type="radio" name="gender" value="male" />Male
                      <input type="radio" name="gender" value="female" /> Female
                  </div>
                  <div className="input-field">
                      <label>Password</label>
                      <i className="fa fa-eye-slash icon"></i>
                      <input type="password" className="inputs" />
                  </div>
                  <div className="input-field">
                      <label className="city">City</label>
                      <i className="fa fa-list icon"></i>
                      <select name="city" id="" className="inputs">
                          <option value="0">Select City</option>
                          <option value="1">City 1</option>
                          <option value="2">City 2</option>
                          <option value="3">City 3</option>
                          <option value="4">City 4</option>
                          <option value="5">City 5</option>
                      </select>
                  </div>
                  <div className="input-field">
                      <label>Zip code</label>
                      <i className="fa fa-home icon"></i>
                      <input type="number" className="inputs" />
                  </div>
                  <div className="input-field">
                      <label className="courses">Courses</label>
                      <input className="" type="checkbox" value="app-development" />App Development
                      <input className="" type="checkbox" value="marketing" />Marketing
                      <input className="" type="checkbox" value="editing" />Editing
                  </div>*/}

        <div className="action text-center my-2">
          <button type="submit" className="submit">
            Submit
          </button>
          <button type="reset" className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;

function convertToBase64(file){
  return new Promise((resolve,reject)=>{
    const filereader = new FileReader()
    filereader.readAsDataURL(file)
    filereader.onload=()=>{
      resolve(filereader.result)
    }
    filereader.onerror = (error)=>{reject(error)}
  })
}