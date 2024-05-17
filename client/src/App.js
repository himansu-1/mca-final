import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
// import Student from "./component/Student";
import SideBar from "./component/SideBar";
import StudentState from "./contextstate/StudentState";
import Profile from "./component/Profile";
import Login from "./component/Login";
import EditProfile from "./component/EditProfile";
import Signup from "./component/Signup";
import Registration from "./component/Registration";
import LoginAdmin from "./admin/LoginAdmin";
import HomeAdmin from "./admin/HomeAdmin";
import Home from "./component/Home";
import Experiment from "./component/Experiment";
import Experiment2 from "./component/Experiment2.js";
import LoginFaculty from "./component/faculty/LoginFaculty.js";
import SignupFaculty from "./component/faculty/SignupFaculty.js";
import CardArea from "./component/faculty/CardArea.js";
import Footer from "./component/Footer.js";
import Search from "./component/Search.js";

function App() {
  return (
    <>
    <StudentState>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="" element={
            <>
            <Home />
            <CardArea />
            </>
          } />
          <Route exact path="/exp" element={<Experiment2 />} />

          <Route exact path="/student" element={<SideBar />}/>
          <Route exact path="/experiment" element={<Experiment />}/>

          <Route exact path="/student/2002" element={<SideBar year={2002}/>}/>
          <Route exact path="/student/2002/:studentId" element={<Profile/>}/>

          <Route exact path="/student/2003" element={<SideBar year={2003}/>}/>
          <Route exact path="/student/2003/:studentId" element={<Profile/>}/>

          <Route exact path="/student/2004" element={<SideBar year={2004}/>}/>
          <Route exact path="/student/2004/:studentId" element={<Profile/>}/>

          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<Signup/>}/>

  {/* After Log-in a student can edit its profile through this 'url' */}
          <Route exact path="/student/authorised/edit/:token" element={<EditProfile/>}/>

  {/* After Sign-up it push to this registration form for register a new student */}
          <Route exact path="/student/authorised/registration/:token" element={<Registration/>}/>

  {/* Administration Penal */}
  {/* <Route exact path="/aadmin" element={<index />}/> */}
          <Route exact path="/aadmin/login" element={<LoginAdmin/>}/>
          <Route exact path="/aadmin/home" element={<HomeAdmin/>}/>

  {/* Faculty Penal */}
          <Route exact path="/faculty/login" element={<LoginFaculty/>}/>
          <Route exact path="/faculty/signup" element={<SignupFaculty/>}/>
          <Route exact path="/search" element={<Search/>}/>
          <Route exact path="/faculty" element={
            <>
            <Home />
            </>
          }/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </StudentState>
    </>
  );
}

export default App;

// https://jubileehall.du.ac.in/?Alumni