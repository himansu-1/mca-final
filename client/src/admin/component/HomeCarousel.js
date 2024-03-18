import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";

const HomeCarousel = (props) => {
  let [showModal, setShowModal] = useState(false);
  const [adminResult, setAdminResult] = useState({})

  const changeAdminOptions = async()=>{
    try {
      const response = await fetch(
        `http://localhost:4000/aadmin/home/webPageOptions/editing/${localStorage.getItem("Admin-token")}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({homeCarousel:adminResult}),
        }
      );
      const result = await response.json();
      console.log(adminResult)
      console.log(result)
      return result.success
    } catch (error) {
      console.log(error);
    }
  }
  const getAdminOptions = async () => {
    try {
      const response = await fetch(
        `http://localhost:4000/aadmin/home/webPageOptions/${localStorage.getItem("Admin-token")}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result.result.homeCarousel);
      return result.result
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleUpload1= async (e)=>{
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setAdminResult({...adminResult,img_1:base64})
    // carousel.img_1 = base64
  }
  const handleUpload2= async (e)=>{
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setAdminResult({...adminResult,img_2:base64})
    // carousel.img_1 = base64
  }
  const handleUpload3= async (e)=>{
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    setAdminResult({...adminResult,img_3:base64})
    // carousel.img_1 = base64
  }
  const handleSaveClick = ()=>{
    changeAdminOptions()
    getAdminOptions()
    console.log(adminResult)
  }
  
  useEffect(() => {
    getAdminOptions().then((resolve)=>{setAdminResult(resolve.homeCarousel)})
    console.log(adminResult)
  }, [])
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3 className="mt-4 mx-2">Home Carousel Images</h3>
        <button
          type="button"
          className="btn btn-info m-2 mt-3"
          onClick={handleShowModal}
        >
          Edit
        </button>
      </div>
      <hr />
      <div className="row p-1" style={{ marginBottom: "10px" }}>
        <img
          src={adminResult.img_1 ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt="Admin"
          className="px-2 m-1 mb-1 col"
          style={{ height: "10rem" }}
        />
        <img
          src={adminResult.img_2 ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt="Admin"
          className="px-2 m-1 mb-1 col"
          style={{ height: "10rem" }}
        />
        <img
          src={adminResult.img_3 ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          }
          alt="Admin"
          className="px-2 m-1 mb-1 col"
          style={{ height: "10rem" }}
        />
      </div>

      <Modal
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
          {/* <div className="bg-body-tertiary me-md-3 pt-md-3 px-md-5 text-center overflow-hidden">
            <div className="row d-flex justify-content-between">
              <div className="col-md-6 card py-3 px-2 text-start rounded"><h6>name</h6></div>
              <div className="col-md-5 card py-3 px-0 rounded">
              <img
                      src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}
                      alt="Admin"
                      className="rounded m-1"
                      width=""
                    />
              </div>
            </div>
          </div> */}

          <div className="d-flex justify-content-center">
            <div className="row">
              <div className="col">
                <div className="d-flex flex-column text-center justify-content-aroumd">
                <label
                  htmlFor="Profile-upload"
                  className=" "
                  style={{ height: "11rem",width:"17rem" }}
                >
                  <img
                    className="profile-upload-image"
                    src={adminResult.img_1 ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  label="Profile"
                  id="Profile-upload-1"
                  accept=".jpeg .png .jpg"
                  className=""
                  onChange={handleUpload1}
                />
                <div><b>Image -1</b></div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column text-center">
                <label
                  htmlFor="Profile-upload"
                  className=" "
                  style={{ height: "11rem",width:"17rem" }}
                >
                  <img
                    className="profile-upload-image"
                    src={adminResult.img_2 ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  label="Profile"
                  id="Profile-upload-2"
                  accept=".jpeg .png .jpg"
                  className=""
                  onChange={handleUpload2}
                />
                <div><b>Image -1</b></div>
                </div>
              </div>
              <div className="col">
                <div className="d-flex flex-column text-center">
                <label
                  htmlFor="Profile-upload"
                  className=" "
                  style={{ height: "11rem",width:"17rem" }}
                >
                  <img
                    className="profile-upload-image"
                    src={adminResult.img_3 ||
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    }
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  label="Profile"
                  id="Profile-upload-3"
                  accept=".jpeg .png .jpg"
                  className=""
                  onChange={handleUpload3}
                />
                <div><b>Image -1</b></div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button className="px-3" variant="secondary" onClick={handleSaveClick}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomeCarousel;


function convertToBase64(file){
  return new Promise((resolve,reject)=>{
    const filereader = new FileReader()
    filereader.readAsDataURL(file)
    filereader.onload=()=>{
      resolve(filereader.result)
    }
    filereader.onerror = (error)=>{reject(error)}
  })
}