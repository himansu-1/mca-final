import React, { useEffect, useState } from "react";
// import ProfileCard from "./component/ProfileCard";
import HomeCarousel from "./component/HomeCarousel";
import StafCarousel from "./component/StafCarousel";
import StudentCarousel from "./component/StudentCarousel";
import StudentList from "./component/StudentList";

const HomeAdmin = () => {
  return (
    <>
    <div>
      <h2 className="m-3">This is Admin Control penal</h2>

    </div>
      <div className="d-flex row mx-3"></div>
      <div className="d-flex row mx-3">
        <div className="card my-1">
          <HomeCarousel />
        </div>
        <div className="card my-1">
          <StafCarousel />
          {/* <ProfileCard /> */}
        </div>
        <div className="card my-1">
          <StudentCarousel />
        </div>
        <div className="card my-1">{/* <StafCarousel /> */}</div>
        <div className="card my-1">
          <StudentList />
        </div>
      </div>
    </>
  );
};

export default HomeAdmin;

