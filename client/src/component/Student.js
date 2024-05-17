import React, { useContext, useEffect } from "react";
import StudentCardBody from "./StudentCardBody";
import StudentContext from "../contextstate/StudentContext";
import { Link } from "react-router-dom";
import Search from "./Search";

const Student = (props) => {
  const context = useContext(StudentContext);
  const { getStudentinfo, Student } = context;

  useEffect(() => {
    getStudentinfo(props.year);
    // eslint-disable-next-line
  }, [props.year]);
  return (
    <>
      <div className="d-flex justify-content-between m-4 px-3">
        <h2>Student of Year : {props.year}</h2>
        {/* <Search /> */}

        <h4>
          <Link to="/student">
            <i
              class="fa-solid fa-arrow-left border p-2 rounded shadow"
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "10px",
              }}
            ></i>
          </Link>
        </h4>
      </div>

      {/* <!-- Content will be loaded here based on the selected year --> */}
      <div className="mx-3 d-flex p-1">
        {/* <StudentCard /> */}
        <div className="justify-content-center row">
          {Student.map((student) => {
            return (
              <StudentCardBody
                key={student._id}
                student={student}
                year={props.year}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Student;

// const student={
//   name:"helo",
//   phone:"helo",
//   passing_year:"helo",
//   profession:"helo",
//   business_organization:"helo",
//   position:"helo",
//   website:"helo",
//   dob:"helo",
//   address:"helo",
//   comments:"helo",
//   email:"hii"
// }

// const [Student, setStudent] = useState([]);
// useEffect(() => {
//   const getData = async ()=>{
//     try {
//       const url = `http://localhost:4000/api/studentinfo/getAllStudents/?passing_year=${props.year?props.year:""}`
//       const data = await axios.get(url)
//       setStudent(data.data)

//     } catch (error) {
//       console.log(error)
//     }
//   }
//   getData()
// }, [props.year])
