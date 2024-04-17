import React, { useContext, useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import StudentContext from "../contextstate/StudentContext";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import "../App.css";

const Header = () => {
  const [student, setStudent] = useState({});
  const [Staf, setStaf] = useState({});
  const [Admin, setAdmin] = useState({});
  const context = useContext(StudentContext);
  const { getStudent, showHeader, getStaf, getAdmin } = context;
  const location = useLocation();
  const navigate = useNavigate();

  // These are logout confirmation model elements
  const [showLogout, setShowLogout] = useState(false);

  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  // These are SideManueBar handling components
  const [showSideBar, setshowSideBar] = useState(false);
  const handleSideBarOpen = () => {
    setshowSideBar(true);
    handleShowProfile();
  };
  const handleSideBarClose = () => {
    setshowSideBar(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("Admin-token");
    localStorage.removeItem("Staf-token");
    handleCloseModal();
    navigate("/");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    // console.log(localStorage.getItem("token"));
    if (localStorage.getItem("token")) {
      navigate(`/student/authorised/edit/${localStorage.getItem("token")}`);
    }
    handleCloseModal();
    handleSideBarClose();
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
  const handleShowProfile = () => {
    if (localStorage.getItem("token")) {
      getStudent(localStorage.getItem("token")).then((resolve) => {
        setStudent(resolve);
      });
    }
    if (localStorage.getItem("Admin-token")) {
      getAdmin(localStorage.getItem("Admin-token"))
      .then((resolve)=>{setAdmin(resolve)})
    }
    if (localStorage.getItem("Staf-token")) {
      getStaf(localStorage.getItem("Staf-token"))
      .then((resolve)=>{setStaf(resolve)})
    }
    // setStudent(getStudent(localStorage.getItem("token")))
    // setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  // useEffect(() => {
  //   handleSideBarClose()
  // }, [location]);
  return (
    <>
      <div>
        <div
          className={`d-flex flex-column flex-shrink-0 p-3 ${
            showSideBar ? "" : "d-none"
          }`}
          style={{
            width: "250px",
            height: "100vh",
            position: "absolute",
            position: "fixed",
            overflow: "hidden",
            zIndex: "1",
            backgroundColor: "#cdcdcd",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-md-0 me-md-auto link-dark text-decoration-none ">
            <span className="fs-4">
              {!localStorage.getItem("Admin-token")
                ? (!localStorage.getItem("Staf-token")
                  ? "Welcome"
                  : "Faculty Penal")
                : "Admin Penal"}
            </span>
            <i
              className="fa-solid fa-arrow-left border p-1 rounded shadow"
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "10px",
              }}
              onClick={handleSideBarClose}
            ></i>
          </div>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-item nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                onClick={handleSideBarClose}
              >
                <svg className="bi me-2" width="16" height="16"></svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/student"
                className={`nav-item nav-link ${
                  location.pathname === "/student" ? "active" : ""
                }`}
                onClick={handleSideBarClose}
              >
                <svg className="bi me-2" width="16" height="16"></svg>
                Student
              </Link>
            </li>
            <li>
              <Link
                to="/faculty"
                className={`nav-item nav-link ${
                  location.pathname === "/faculty" ? "active" : ""
                }`}
                onClick={handleSideBarClose}
              >
                <svg className="bi me-2" width="16" height="16"></svg>
                Faculty
              </Link>
            </li>
            {localStorage.getItem("Admin-token") ? (
              <li>
                <Link
                  to="/aadmin/home"
                  className={`nav-item nav-link ${
                    location.pathname === "/aadmin/home" ? "active" : ""
                  }`}
                  onClick={handleSideBarClose}
                >
                  <svg className="bi me-2" width="16" height="16"></svg>
                  Admin
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
          <hr />
          {localStorage.getItem("token") ||
          localStorage.getItem("Admin-token") ||
          localStorage.getItem("Staf-token") ? (
            <Link>
              <div className="dropdown">
                <a
                  className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {
                    localStorage.getItem("token") ? (
                      // Fetching Student Profile Account
                      <React.Fragment>
                        <img
                          src={
                            (student ? student.profile_img : "") ||
                            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          }
                          alt=""
                          width="32"
                          height="32"
                          className="rounded-circle me-2"
                        />
                        <strong>{student.name}</strong>
                      </React.Fragment>
                    ) : localStorage.getItem("Admin-token") ? (
                      // Fetching Admin Profile Account
                      <React.Fragment>
                        <img
                          src={
                             "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          }
                          alt=""
                          width="32"
                          height="32"
                          className="rounded-circle me-2"
                        />
                        <strong>{Admin.name}</strong>
                      </React.Fragment>
                    ) : (
                      // Fetching Staf Profile Account
                      <React.Fragment>
                        <img
                          src={
                            Staf.profile_img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                          }
                          alt=""
                          width="32"
                          height="32"
                          className="rounded-circle me-2"
                        />
                        <strong>{Staf.name}</strong>
                      </React.Fragment>
                    )

                    /* <img
                      src={
                        (student?student.profile_img:"") || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      }
                      alt=""
                      width="32"
                      height="32"
                      className="rounded-circle me-2"
                    />
                    <strong>{student.name}</strong> */
                  }
                </a>
                <ul
                  className="dropdown-menu text-small shadow"
                  aria-labelledby="dropdownUser2"
                >
                  <li>
                    <a className="dropdown-item" onClick={handleEdit}>
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={handleShowLogout}>
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </Link>
          ) : location.pathname === "/login" ? (
            <Link
              className="btn btn-sm btn-outline-secondary "
              to="/signup"
              onClick={handleSideBarClose}
            >
              Sign up
            </Link>
          ) : (
            <Link
              className="btn btn-sm btn-outline-secondary mx-2"
              to="/login"
              onClick={handleSideBarClose}
            >
              Log in
            </Link>
          )}
          {/* This profile section on sidebar */}
          {/* {(localStorage.getItem("Admin-token") || localStorage.getItem("Staf-token"))? (
            !localStorage.getItem("token") ? (
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
                <div className="dropdown">
                  <a
                    className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={
                        (student?student.profile_img:"") || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      }
                      alt=""
                      width="32"
                      height="32"
                      className="rounded-circle me-2"
                    />
                    <strong>{student.name}</strong>
                  </a>
                  <ul
                    className="dropdown-menu text-small shadow"
                    aria-labelledby="dropdownUser2"
                  >
                    <li>
                      <a className="dropdown-item" onClick={handleEdit}>
                        Edit Profile
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" onClick={handleShowLogout}>
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </Link>
              // This is admin logout Button
            )
          ) : (
            <Button
              className="btn-sm border btn-info text-light"
              variant="secondary"
              onClick={handleShowLogout}
            >
              Log-out
            </Button>
          )} */}
        </div>
      </div>

      <div className={`Header ${showHeader}`}>
        {/*             It is  Header                   */}
        <div className="container">
          <header className="border-bottom border-secondary lh-1 py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
              <div className="col-4 pt-1">
                <a onClick={handleSideBarOpen} style={{ cursor: "pointer" }}>
                  <i className="fa-solid fa-bars "></i>
                </a>
              </div>
              <div className="col-4 text-center ">
                <Link className="nav-item nav-link" to="/">
                  <h1 className="m-0">BUMCA</h1>
                </Link>
              </div>
              <div>
                {/* This is Profile Button at Header section */}
                {/* <div className="col-4 d-flex justify-content-end align-items-center">
                <div>
                  {!localStorage.getItem("Admin-token") ? (
                    !localStorage.getItem("token") ? (
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
                      // This is admin logout Button
                    )
                  ) : (
                    <Button
                      className="btn-sm border btn-info text-light"
                      variant="secondary"
                      onClick={handleShowLogout}
                    >
                      Log-out
                    </Button>
                  )}
                </div>
              </div> */}
              </div>
            </div>
          </header>
        </div>

        {/*         This is NavBar           */}
        <div className="container">
          {/* <div className="nav-scroller py-1 mb-3 my-border">
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
              <Link className="nav-item nav-link " to="/experiment">
                PhD
              </Link>
              <Link className="nav-item nav-link " to="/experiment">
                Faculty
              </Link>
              <Link className="nav-item nav-link " to="/experiment">
                Research
              </Link>
              <Link className="nav-item nav-link " to="/experiment">
                Technology
              </Link>
              {localStorage.getItem("Admin-token") ? (
                <Link className="nav-item nav-link " to="/aadmin/home">
                  Admin
                </Link>
              ) : (
                ""
              )}
            </nav>
          </div> */}
        </div>
      </div>

      {/* This is User profile showing modal */}
      <div>
        {/* <Modal
        size="xl"
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Hello !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-body-tertiary me-md-3 pt-md-3 px-md-5 text-center overflow-hidden">
            <div className="row d-flex justify-content-between">
              <div className="col-md-6 card py-3 px-2 text-start rounded">
                <h6>{student.name}</h6>
              </div>
              <div className="col-md-5 card py-3 px-0 rounded">
                <img
                  src={
                    student.profile_img ||
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  }
                  alt="Admin"
                  className="rounded m-1"
                  width=""
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button className="px-3" variant="secondary" onClick={handleEdit}>
            Edit
          </Button>
          <Button
            className="px-1"
            variant="secondary"
            onClick={handleShowLogout}
          >
            Log out
          </Button>
        </Modal.Footer>
      </Modal> */}
      </div>

      {/* This is Logout confirmation showing modal */}
      <Modal show={showLogout} style={{}}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to Logout.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLogout}>
            Candel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleLogout();
              handleCloseLogout();
            }}
          >
            Logout
          </Button>
        </Modal.Footer>
      </Modal>

      <Outlet />
    </>
  );
};

export default Header;
