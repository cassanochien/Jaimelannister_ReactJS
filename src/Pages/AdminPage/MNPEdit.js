import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdModeEdit } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MNPEdit({ id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id,
    categoryName: "",
    courseName: "",
    metaDescription: "",
    coursePrice: "",
  });

  const handleEditProduct = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3000/courseData/${id}`, values)
      .then((res) => {
        setShow(false);
        navigate("/admin/managerproduct");
        alert("Edit successfully !");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/courseData/${id}`).then((res) => {
      setValues({
        ...values,
        categoryName: res.data.categoryName,
        courseName: res.data.courseName,
        metaDescription: res.data.metaDescription,
        coursePrice: res.data.coursePrice,
      });
    });
  }, []);

  return (
    <>
      <span className="product-icons" onClick={handleShow}>
        <MdModeEdit />
      </span>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Quick Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            <label className="form-label">Category name</label>
            <input
              type="text"
              className="form-control"
              value={values.categoryName}
              onChange={(e) =>
                setValues({ ...values, categoryName: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Course name</label>
            <input
              type="text"
              className="form-control"
              value={values.courseName}
              onChange={(e) =>
                setValues({ ...values, courseName: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              value={values.metaDescription}
              onChange={(e) =>
                setValues({ ...values, metaDescription: e.target.value })
              }
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              value={values.coursePrice}
              onChange={(e) =>
                setValues({ ...values, coursePrice: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditProduct}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MNPEdit;
