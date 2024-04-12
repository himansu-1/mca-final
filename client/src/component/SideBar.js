import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Student from "./Student";
import StudentContext from "../contextstate/StudentContext";

const SideBar = (props) => {
  const context = useContext(StudentContext);
  const { setShowHeader, getPageData } = context;
  setShowHeader("");
  const [homeContent, sethomeContent] = useState({});

  useEffect(() => {
    getPageData().then((resolve) => {
      sethomeContent(resolve.studentCarousel);
      console.log(homeContent);
    });
  }, []);
  return (
    <>
    <div className="border m-3">
      <div className="d-flex justify-content-between m-2">
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
        <div className="col-md-9">
          {props.year ? (
            <Student year={props.year} />
          ) : (
            <>
              <div className="row m-4 ">
                <div class="col  b-2 p-3 ">
                  <div className="d-flex justify-content-center text-end">
                    <h3>This Student section of our University</h3>
                  </div>
                  <hr />
                  <p className=" ">
                    <small className="fst-italic ">
                      BUMCA, the Berhampur University MCA Alumni, represents
                      over 600+ alumni members who excelled in the IT industry.
                      Our mission is to enhance bonding among alumni members,
                      connect with students, and foster synergy with teachers.
                      We are committed to our alma-mater by contributing to its
                      academic, research, and off-campus programs. We organize
                      annual fund-raising campaigns to provide scholarships and
                      financial aid to students.
                    </small>
                  </p>
                </div>
                <div
                  id="carouselExampleAutoplaying"
                  class="carousel slide p-4 b-2 col col-7"
                  data-bs-ride="carousel"
                  style={{ height: "350px", overflow: "hidden" }}
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        src={
                          homeContent.img_1 ||
                          "https://www.techfry.com/images/coding/coding05.jpg"
                        }
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={
                          homeContent.img_2 ||
                          "https://www.techfry.com/images/coding/coding05.jpg"
                        }
                        class="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        src={
                          homeContent.img_3 ||
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
            </>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default SideBar;
