import React, { useContext, useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import StudentContext from '../../contextstate/StudentContext.js';


const LoginFaculty = () => {
    let navigate = useNavigate()
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const context = useContext(StudentContext);
    const { stafLogin } = context;
  
    const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleLoginClick = (e) => {
      e.preventDefault();
      stafLogin(credentials.email, credentials.password).then((resolve) => {
        if (resolve) {
          alert("Successfully login");
          navigate("/");
        } else {
          console.log("Something went wrong");
        }
      });
    };

    return (<>
    
    <div class="login-box">
  <h2>Login</h2>
  <form onSubmit={handleLoginClick}>
    <div class="user-box">
      <input type="email" name="email" required autoComplete='nope' value={credentials.email} className='rounded pt-4' onChange={onChange}/>
      <label className='my-3'>Mail Id</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" required value={credentials.password} className='rounded pt-4' onChange={onChange}/>
      <label className='my-3'>Password</label>
    </div>
    <div className='text-center' onClick={()=>{navigate("/faculty/signup")}}>CLICK HERE FOR SIGNUP</div>
    <a><button type='submit' className='border'>        
      Login
    </button></a>
  </form>
</div>
    </>);
}

export default LoginFaculty;