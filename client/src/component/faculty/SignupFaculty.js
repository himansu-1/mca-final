import React, { useContext, useEffect, useState } from 'react';
import StudentContext from '../../contextstate/StudentContext';
import { useNavigate } from 'react-router-dom';
import './style.css'

const SignupFaculty = () => {
  const [credentials, setCredentials] = useState({name:"",email:"",password:""})
    const context = useContext(StudentContext)
    const {stafSignup} = context
    const navigate = useNavigate()

    const onchange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        stafSignup(credentials.name,credentials.email,credentials.password).then((resolve)=>{
            if (resolve) {
                alert("Successfully Sign-up")
                // navigate(`/student/authorised/registration/${localStorage.getItem("token")}`)
                navigate("/")
            }else{
                alert("Something went wrong check Console...")
            }
        })

    }


    return (<>
    
    <div class="login-box">
  <h2>Sign Up</h2>
  <form 
  onSubmit={handleSubmit}>
    <div class="user-box">
      <input 
      type="name" 
      name="name" 
      required
      value={credentials.name}
      onChange={onchange}
      className='rounded pt-4 px-2' 
      />
      <label className='my-3'>User Name</label>
    </div>
    <div class="user-box">
      <input 
      type='email'
      name='email'
      required
      value={credentials.email}
      onChange={onchange}
      className='rounded pt-4 px-2'/>
      <label className='my-3'>Mail Id</label>
    </div>
    <div class="user-box">
      <input 
      type="password" 
      name="password" 
      autoComplete='new-password'
      value={credentials.password}
      onChange={onchange}
      required
      minLength={4}
      className='rounded pt-4 px-2' />
      <label className='my-3'>Password</label>
    </div>
    <a className='m-0'>        
      <button className='border ' type='submit'>SignUp</button>
    </a>
  </form>
</div>
    </>);
}

export default SignupFaculty;