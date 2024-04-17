import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
import "./component styling/Login.css";
import { Link, useNavigate } from "react-router-dom";
import StudentContext from "../contextstate/StudentContext";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const context = useContext(StudentContext);
  const { studentLogin } = context;
  let navigate = useNavigate();

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleLoginClick = (e) => {
    e.preventDefault();
    studentLogin(credentials.email, credentials.password).then((resolve) => {
      if (resolve) {
        alert("Successfully login");
        navigate("/");
      } else {
        console.log("Something went wrong");
      }
    });
  };

  return (
    <>
      <div className="d-flex justify-content-end mx-3 ">
        <div className="login-form">
          <form onSubmit={handleLoginClick}>
            <h1>Login</h1>
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
              <Link to="/signup" className="link">
                click here for Sign up
              </Link>
            </div>
            <div className="action">
              {/* <button><Link to="/adminlogin" className='nav-item nav-link'>Admin Log in</Link></button> */}
              <button type="submit" className="active-button ">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="m-3" style={{ position: "absolute" }}>
          <button className="rounded btn border btn-sm btn-success " onClick={()=>{navigate("/faculty/login")}}>
            Staf Login
            <i
              className="col fa-solid fa-arrow-right px-1"
              style={{
                cursor: "pointer",
                right: "10px",
              }}
            ></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;

// const handleLoginClick = async(e)=>{
//   e.preventDefault()
//       try {
//           const response = await fetch(`http://localhost:4000/api/student/login`, {
//               method: "POST", // or 'PUT'
//               headers: {
//                   "Content-Type": "application/json"
//               },
//               body: JSON.stringify({ email: credentials.email, password: credentials.password })
//           })
//           const result = await response.json()
//           if (result.success) {
//               // props.showAlert("Successfully login", " alert-info")
//               alert("Successfully login", " alert-info")
//               localStorage.setItem("token", result.authToken)
//               navigate("/");

//           } else {
//               // props.showAlert("Enter an valid credentials", "alert-danger")
//               alert("Enter an valid credentials", "alert-danger")
//               console.log(result)
//           }

//       } catch (error) {
//           console.log(error)
//       }
// };
