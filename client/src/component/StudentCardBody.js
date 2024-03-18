import React from "react";
import {useNavigate} from "react-router-dom";

export default function StudentCardBody(props) {
    const navigate = useNavigate()
  const { student ,year} = props;

  const handleShowModal = () => {
    navigate(`/student/${year}/${student._id}`)
  };
  return (

    <>
    
      <div className="card border mb-3"  onClick={handleShowModal}>
        <div className="row g-0">
          <div className="col-md-4 p-2" style={{height:"12rem"}}>
            <img
              src={student.profile_img || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
              className="img-fluid rounded h-100 w-100 "
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-title">{student.name}</h6>
              <p className="card-text m-0">
                Profession :
                <small
                  className="text-body-secondary"
                  fontFamily="MinecrafterReg.ttf"
                >
                  {" "}
                  {student.profession}
                </small>
              </p>
              <p className="booomba">
                Business / Organization :
                <small className="text-body-secondary">
                  {" "}
                  {student.business_organization}
                </small>
              </p>
              <p className="card-text m-0">
                Position :
                <small className="text-body-secondary">
                  {" "}
                  {student.position}
                </small>
              </p>
              <p className="card-text m-0">
                Passing Year :
                <small className="text-body-secondary">
                  {" "}
                  {student.passing_year}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <Modal
        size="lg"
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{student.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
            <div
              className="bg-body shadow-sm mx-auto"
              style={{ width: "100%", borderRadius: "21px 21px 0 0" }}
            >
              <div className="">
                <svg
                  className="bd-placeholder-img rounded-circle"
                  width="140"
                  height="140"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect
                    width="100%"
                    height="100%"
                    fill="var(--bs-secondary-color)"
                  ></rect>
                </svg>
                <div className="text-start">
                  <h2 className="fw-normal">{student.name} </h2>
                  <hr className="border border-primary border-3 opacity-75"></hr>
                  <form>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        Email
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder={student.email}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        Phone
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder={student.phone}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        Passing Year
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder={student.passing_year}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        Profession
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder={student.profession}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        Business/Organization
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder={student.business_organization}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        Position
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder={student.position}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        Website
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder={student.website}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        DOB
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder={student.dob}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        Address
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="email"
                          className="form-control form-control-sm"
                          id="colFormLabelSm"
                          placeholder={student.address}
                          readOnly
                        />
                      </div>
                    </div>
                    <div className="form-group justify-content-between d-flex py-2">
                      <label
                        htmlFor="colFormLabelSm"
                        className="col-sm-3 text-start col-form-label col-form-label-sm m-0"
                      >
                        Comments
                      </label>
                      <div className="col-sm-9">
                        <div className="col-am-9 border rounded p-1 text-muted">
                          {student.comments}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

// export default StudentCardBody;
