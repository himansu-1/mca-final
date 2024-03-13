import React from "react";
import { useParams, Link } from "react-router-dom";
import Student from "./Student";

const SideBar = (props) => {
  const para = useParams();

  return (
    <>
      <div className="d-flex justify-content-center m-2">
        <div className="col-md-2 border border-dark my-2 p-1 justify-content-center">
          <h1 className=" m-0 px-3 b-0 w-100">Year</h1>
          <hr />
          <Link to={`/student/2002`}>
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center my-1 btn-sm"
            >
              2002
            </button>
          </Link>
          <Link to={`/student/2003`}>
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </Link>
          <Link to={`/student/2004`}>
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2004
            </button>
          </Link>
        </div>
        <div className="col-md-9 border border-dark m-2">
          {
          props.year ? 
          <Student year={props.year}/> :
          <>
          <div>Here you can get all the student details by choosing their accademic year...</div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis perspiciatis, quas facilis ipsum impedit modi, voluptate reiciendis, laborum in sunt vel possimus ad veniam fuga maxime incidunt eligendi? Minima, tempore qui. Accusamus, laboriosam hic? Enim, iure quae ullam voluptate labore a. Temporibus, qui accusamus.</div>
          </>
          }
        </div>
      </div>
    </>
  );
};

export default SideBar;
