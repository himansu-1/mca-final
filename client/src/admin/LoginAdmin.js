import React, { useContext, useState } from 'react';
import StudentContext from '../contextstate/StudentContext';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
    const context = useContext(StudentContext)
    const {setShowHeader} = context
    const navigate = useNavigate()
    setShowHeader("d-none")
    const [credentials,setCredentials] = useState({name:"",password:""})


    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleLoginClick = (e) =>{
      e.preventDefault()
      authLogin(credentials.email,credentials.password).then((resolve)=>{
        //   console.log(resolve)
        if (resolve) {
          alert("Successfully Admin login")
          localStorage.removeItem("token")
          localStorage.setItem("Admin-token",resolve)
          navigate(`/`)
        }else {
          console.log("Something went wrong")
        }
      })
    }

    // This is login form setup it saves the Auth-Toke in the lo~calStorage 
  const authLogin = async (email,password) => {
    try {
      const response = await fetch(`http://localhost:4000/aadmin/adminLogin`, {
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
    //   console.log(result)
    //   result.success?  localStorage.setItem("token", result.authToken):alert("Enter valid credentials")
      return result.authToken
    } catch (error) {
      console.log(error);
    }
  };

    return (
    <>
    {/* <div className='d-flex justify-content-center'>
        <div className="card">helo</div>
        <form></form>
    </div>; */}
    <div className="login-form text-center ">
      <form onSubmit={handleLoginClick}>
        <h1>Welcome</h1>
        <div className="content">
          <div className="input-field">
            <input 
              type="email" 
              name="email"
              placeholder="Email" 
              autoComplete="nope" 
              value={credentials.email}
              onChange={onChange}
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="new-password"
              value={credentials.password}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="action">
          {/* <button><Link to="/adminlogin" className='nav-item nav-link'>Admin Log in</Link></button> */}
          <button type="submit" className="bg-success bg-gradient text-light">Log in</button>
        </div>
      </form>
    </div>
    </>)
}


export default LoginAdmin;