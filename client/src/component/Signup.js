import React, {  useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentContext from '../contextstate/StudentContext';


const Signup = () => {
    const [credentials, setCredentials] = useState({name:"",email:"",password:""})
    const context = useContext(StudentContext)
    const {studentSignup} = context
    const navigate = useNavigate()
    // const context = useContext(StudentContext)

    const onChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        studentSignup(credentials.name,credentials.email,credentials.password).then((resolve)=>{
            if (resolve) {
                alert("Successfully Sign-up")
                navigate(`/student/authorised/registration/${localStorage.getItem("token")}`)
            }else{
                alert("Something went wrong check Console...")
            }
        })

    }

    
    return (
        <div className={`login-form ${localStorage.getItem("token")?"d-none":""}`}>
            <form onSubmit={handleSubmit}>
                <h1>Sign up Here </h1>
                <div className="content">
                    <div className="input-field">
                        <input type="name" placeholder="Name" autoComplete="nope"
                        name='name' value={credentials.name} onChange={onChange}/>
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder="Email" autoComplete="nope" 
                        name='email' value={credentials.email} onChange={onChange} />
                    </div>
                    <div className="input-field">
                        <input type="password" placeholder="Password" autoComplete="new-password"                        
                        name='password' value={credentials.password} onChange={onChange} required minLength={4}/>
                    </div>
                    {/* <a href="#/" className="link">Forgot Your Password?</a> */}
                </div>
                <div className="action">
                    <button type='submit' className='active-button'>
                            Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;


// const handleSubmit = async (e)=>{
//     e.preventDefault()
//     try {
//         const response = await fetch(`http://localhost:4000/api/student/CreateUser`,{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body: JSON.stringify({
//                 name:credentials.name,
//                 email:credentials.email,
//                 password:credentials.password
//             })
//         })
//         const result = await response.json()
//         // console.log(result)
//         if (!result.success) {
//             alert(result.error)
//         }
//         if (result.success) {
//             localStorage.setItem("token",result.authToken)
//             localStorage.setItem("name",credentials.name)
//             localStorage.setItem("email",credentials.email)
//             // localStorage.setItem("password",credentials.password)
//             alert("Successfully Signup")
//             navigate(`/student/authorised/registration/${localStorage.getItem("token")}`)
//         }
//     } catch (error) {
        
//     }
// }