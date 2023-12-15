import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function MNPAdd() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isValidFloat = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };
  const navigate = useNavigate();

  const handleAddNewProducts = (e) => {
    e.preventDefault();
    if (
      categoryName &&
      courseName &&
      metaDescription &&
      isValidFloat(coursePrice)
    ) {
      axios
        .post("http://localhost:3000/courseData", {
          categoryName,
          courseName,
          metaDescription,
          coursePrice: parseFloat(coursePrice),
          quantity,
        })
        .then((res) => {
          setShow(false);
          navigate("/admin/managerproduct");
          alert("Add successfully !");
          window.location.reload();
        })
        .catch(() => {
          throw new Error("Invalid");
        });
    }
  };

  return (
    <>
      <button className="product-btn" onClick={handleShow}>
        Add new product
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Quick add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-2">
            <label className="form-label">Category name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Course name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Description</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setMetaDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setCoursePrice(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          {!courseName && !coursePrice && !categoryName && !metaDescription ? (
            <button type="button" className="btn btn-primary" disabled>
              Add
            </button>
          ) : (
            <Button variant="primary" onClick={handleAddNewProducts}>
              Add
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MNPAdd;
