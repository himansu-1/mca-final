import React, { useContext, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import StudentContext from "../contextstate/StudentContext";

const Header = () => {
  const [student, setStudent] = useState({});
  const context = useContext(StudentContext);
  const { getStudent } = context;
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    handleCloseModal();
    navigate("/");
  };

  const handleEdit = () => {
    // console.log(localStorage.getItem("token"))
    navigate(`/student/authorised/edit/${localStorage.getItem("token")}`);
    handleCloseModal();
  };

  // These functions are for profile Modal
  let [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    getStudent(localStorage.getItem("token")).then((resolve) => {
      setStudent(resolve);
    });
    // setStudent(getStudent(localStorage.getItem("token")))
    setShowModal(true);
    console.log(student.profile_img);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <>
    <div className={`Header ${location==="/student/2002/:studentId"?"d-none":"-none"}`}>
      {/*             It is  Header                   */}
      <div className="container">
        <header className="border-bottom lh-1 py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1"></div>
            <div className="col-4 text-center ">
              <Link className="nav-item nav-link" to="/">
                <h1>BUMCA</h1>
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              {/* This is Search Button */}

              {/* <a className="link-secondary " href="/" -label="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5" /><path d="M21 21l-5.2-5.2" />
                                </svg>
                            </a> */}
              <div>
                {!localStorage.getItem("token") ? (
                  location.pathname === "/login" ? (
                    <Link
                      className="btn btn-sm btn-outline-secondary "
                      to="/signup"
                    >
                      Sign up
                    </Link>
                  ) : (
                    <Link
                      className="btn btn-sm btn-outline-secondary mx-2"
                      to="/login"
                    >
                      Log in
                    </Link>
                  )
                ) : (
                  // This is the Profile Button
                  <Link>
                    <h3>
                      <i
                        className="fa-solid fa-user"
                        onClick={handleShowModal}
                      ></i>
                    </h3>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>
      </div>

      {/*         This is NavBar           */}
      <div className="container">
        <div className="nav-scroller py-1 mb-3 border-bottom">
          <nav className="nav nav-underline justify-content-between">
            <Link
              className={`nav-item nav-link ${
                location.pathname === "/" ? "link-primary active" : ""
              }`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`nav-item nav-link ${
                location.pathname === "/student" ? "link-primary active" : ""
              }`}
              to="/student"
            >
              Student
            </Link>
            <Link className="nav-item nav-link " to="/">
              Technology
            </Link>
            <Link className="nav-item nav-link " to="/">
              Design
            </Link>
            {/* <Link className="nav-item nav-link " to="/">Culture</Link>
                        <Link className="nav-item nav-link " to="/">Business</Link>
                        <Link className="nav-item nav-link " to="/">Politics</Link>
                        <Link className="nav-item nav-link " to="/">Opinion</Link>
                        <Link className="nav-item nav-link " to="/">Science</Link>
                        <Link className="nav-item nav-link " to="/">Health</Link>
                        <Link className="nav-item nav-link " to="/">Style</Link>
                        <Link className="nav-item nav-link " to="/">Travel</Link> */}
          </nav>
        </div>
      </div>
    </div>
      <Modal
        size="lg"
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hello !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="row">
              <div
                className="bg-body shadow-sm mx-auto col-md-7"
                style={{ height: "15rem" }}
              >
                <div
                  className=""
                  style={{ width: "100%", height: "100%", padding: "1rem" }}
                >
                  <h2>{student.name}</h2>
                </div>
              </div>
              <div
                className="bg-body shadow-sm mx-auto"
                style={{
                  width: "15rem",
                  height: "15rem",
                  borderRadius: "21px 21px 0 0",
                }}
              >
                <div
                  className=""
                  style={{ width: "100%", height: "100%", padding: "1rem" }}
                >
                  <img
                    src={
                      student.profile_img
                        ? student.profile_img
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    alt=""
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button className="px-3" variant="secondary" onClick={handleEdit}>
            Edit
          </Button>
          <Button className="px-1" variant="secondary" onClick={handleLogout}>
            Log out
          </Button>
        </Modal.Footer>
      </Modal>
      <Outlet />
    </>
  );
};

export default Header;
