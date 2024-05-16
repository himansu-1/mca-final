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
      {props.year ? (
        <Student year={props.year} />
      ) : (
        <>
        
          <div className="row my-2 mx-4">
            
            {/* Left Side test content */}
            <div className="col b-2 p-3">
              <div className="d-flex justify-content-center text-center">
                <h3>This Student section of our University</h3>
              </div>
              <hr />
              <p className=" ">
                <small className="fst-italic ">
                  BUMCA, the Berhampur University MCA Alumni, represents over
                  600+ alumni members who excelled in the IT industry. Our
                  mission is to enhance bonding among alumni members, connect
                  with students, and foster synergy with teachers. We are
                  committed to our alma-mater by contributing to its academic,
                  research, and off-campus programs. We organize annual
                  fund-raising campaigns to provide scholarships and financial
                  aid to students.
                </small>
              </p>
            </div>

            {/* Right Side Carousel content */}
            <div className="col col-7 b-2 p-4">
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-bs-ride="carousel"
                style={{zIndex:"1"}}
              >
                <div class="carousel-inner rounded border shadow">
                  <div class="carousel-item active">
                    <img
                      src={homeContent.img_1}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={homeContent.img_2}
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={homeContent.img_3}
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

          </div>
        </>
      )}

      <div className="d-flex justify-content-center mx-2">
        <div className="w-100 my-2 p-1 row">
          <h3 className=" m-0 px-3 b-0 w-100 text-start mb-2 pt-2">Year</h3>
          <hr className="w-100" />
          <Link to={`/student/2002`} className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2002
            </button>
          </Link>
          <Link to={`/student/2003`} className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </Link>
          <Link to={`/student/2004`} className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2004
            </button>
          </Link>
          {/* Spam buttons */}
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2005
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2006
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2007
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2008
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2009
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2010
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2011
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2012
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2013
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2014
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2015
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2016
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2017
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2018
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2019
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2020
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2021
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2022
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2023
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2024
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
          <div className="col-1">
            <button
              type="button"
              className="btn btn-secondary w-100 btn-block d-flex justify-content-center mb-1 btn-sm"
            >
              2003
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
