import React, { useContext, useEffect, useState } from "react";
import StudentContext from "../contextstate/StudentContext";
// import './component styling/Carousel.js'

const Home = () => {
  const context = useContext(StudentContext);
  const { setShowHeader, getPageData } = context;
  setShowHeader("");
  const [homeContent, sethomeContent] = useState({});

  // const getPageData = async () => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:4000/aadmin/home/webPageOptions`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const result = await response.json();
  //     // console.log(result.result.homeCarousel;
  //     return result.result[0];
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    getPageData().then((resolve) => {
      sethomeContent({
        homeCarousel: resolve.homeCarousel,
        stafCarousel: resolve.stafData.stafCarousel,
        studentCarousel: resolve.studentCarousel,
      });
    });
    // console.log(homeContent);
  }, []);
  return (
    <>
      <div className="row m-4">
        {/* <div className="row justify-content-md-center"> */}
        <div className="col  b-2 p-3 ">
            <div className="d-flex justify-content-center">
                <h3>This is our University</h3>

            </div>
          <hr />
          <p className=" ">
            <small className="fst-italic " >
            BUMCA, the Berhampur University MCA Alumni, represents over 600+ alumni members who excelled in the IT industry. Our mission is to enhance bonding among alumni members, connect with students, and foster synergy with teachers. We are committed to our alma-mater by contributing to its academic, research, and off-campus programs. We organize annual fund-raising campaigns to provide scholarships and financial aid to students.
            <br/><br/>Our second alumni reunion meet, "Sangam 2014," will be held at Berhampur University on December 29th, 2014.
            </small>
          </p>
        </div>
        <div className="col col-7 b-2 p-4" style={{zIndex:"1"}}>
          <div
            id="carouselExampleAutoplaying"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <img
                  src={
                    homeContent.homeCarousel
                      ? homeContent.homeCarousel.img_1
                      : ""
                  }
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    homeContent.homeCarousel
                      ? homeContent.homeCarousel.img_2
                      : ""
                  }
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={
                    homeContent.homeCarousel
                      ? homeContent.homeCarousel.img_3
                      : ""
                  }
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="container "></div>
    </>
  );
};

export default Home;
