import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Student from "./Student";
import StudentContext from "../contextstate/StudentContext";

const SideBar = (props) => {
  const context = useContext(StudentContext)
  const {setShowHeader} = context
  setShowHeader("")

  return (
    <>
      <div className="d-flex justify-content-center m-2">
        <div className="col-md-2 border card my-2 p-1 ">
          <h3 className=" m-0 px-3 b-0 w-100 text-center pt-2">Year</h3>
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
        <div className="col-md-9 card border p-2 m-2">
          {
          props.year ? 
          <Student year={props.year}/> :
          <>
          <div>
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide px-5"
            data-bs-ride="carousel"
            style={{height:"350px",overflow:"hidden"}}
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={
                    // homeContent.homeCarousel
                    //   ? homeContent.homeCarousel.img_1
                    //   : ""
                    "https://www.techfry.com/images/coding/coding05.jpg"
                  }
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={
                    // homeContent.homeCarousel
                    //   ? homeContent.homeCarousel.img_2
                    //   : ""
                    "https://www.techfry.com/images/coding/coding05.jpg"
                  }
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={
                    // homeContent.homeCarousel
                    //   ? homeContent.homeCarousel.img_3
                    //   : ""
                    "https://www.techfry.com/images/coding/coding05.jpg"
                  }
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          </div>
          <div>
          <div className="d-flex justify-content-center mt-2">
                <h3>This is our University</h3>

            </div>
          <hr />
          <p className="px-4 ">
            <small className="fst-italic " >
            BUMCA, the Berhampur University MCA Alumni, represents over 600+ alumni members who excelled in the IT industry. Our mission is to enhance bonding among alumni members, connect with students, and foster synergy with teachers. We are committed to our alma-mater by contributing to its academic, research, and off-campus programs. We organize annual fund-raising campaigns to provide scholarships and financial aid to students.
            <br/><br/>Our second alumni reunion meet, "Sangam 2014," will be held at Berhampur University on December 29th, 2014.
            </small>
          </p>
          </div>
          </>
          }
        </div>
      </div>
    </>
  );
};

export default SideBar;
