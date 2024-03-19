import React, { useContext, useEffect, useState } from "react";
import StudentContext from "../contextstate/StudentContext";
// import './component styling/Carousel.js'

const Home = () => {
  const context = useContext(StudentContext);
  const { setShowHeader } = context;
  setShowHeader("");
  const [homeContent, sethomeContent] = useState({});

  const getPageData = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/aadmin/home/webPageOptions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      // console.log(result.result.homeCarousel;
      return result.result[0];
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPageData().then((resolve) => {
      sethomeContent({
        homeCarousel: resolve.homeCarousel,
        stafCarousel: resolve.stafData.stafCarousel,
        studentCarousel: resolve.studentCarousel,
      });
    });
    console.log(homeContent);
  }, []);
  return (
    <>
      <div className="row m-4">
        {/* <div class="row justify-content-md-center"> */}
        <div class="col  b-2 p-3 ">
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
        <div class="col col-7 b-2 p-4">
          <div
            id="carouselExampleAutoplaying"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={
                    homeContent.homeCarousel
                      ? homeContent.homeCarousel.img_1
                      : ""
                  }
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={
                    homeContent.homeCarousel
                      ? homeContent.homeCarousel.img_2
                      : ""
                  }
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src={
                    homeContent.homeCarousel
                      ? homeContent.homeCarousel.img_3
                      : ""
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
        {/* </div> */}
      </div>

      <div className="container "></div>
    </>
  );
};

export default Home;
