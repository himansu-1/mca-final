import React, { useContext, useEffect } from "react";
import StudentCardBody from "./StudentCardBody";
import StudentContext from "../contextstate/StudentContext";

const Student = (props) => {
  const context = useContext(StudentContext)
  const { getStudentinfo, Student } = context


  useEffect(() => {
    getStudentinfo(props.year)
    // eslint-disable-next-line
  }, [props.year])
  return (
    <>
      <div className="d-flex justify-content-center m-2 p-1">
        {/* <br /> */}
        {/* <hr className="border-2 mx-2"/> */}
        {/* <button type="button" className="btn btn-primary py-2 rounded-circle">
          Prev
        </button> */}
        <h2>Member Information</h2>
        {/* <button type="button" className="btn btn-primary py-2 rounded-circle">
          Next
        </button> */}
      </div>
      <hr className="border-2 mx-2" />
      {/* <!-- Content will be loaded here based on the selected year --> */}
      <div className="mx-3">
        {/* <StudentCard /> */}
        <div className="container">
          {
            Student.map((student) => {
              return <StudentCardBody key={student._id} student={student} year={props.year}/>;
            })
          }
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