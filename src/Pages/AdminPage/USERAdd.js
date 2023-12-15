import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function USERAdd() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const isValidFloat = (value) => {
  //   return !isNaN(parseFloat(value)) && isFinite(value);
  // };
  const navigate = useNavigate();

  const handleAddNewUser = (e) => {
    e.preventDefault();
    if (name && password && email) {
      axios
        .post("http://localhost:3000/users", {
          name,
          email,
          password,
        })
        .then((res) => {
          setShow(false);
          alert("Add successfully !");
          navigate("/admin/manageruser");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <button className="product-btn" onClick={handleShow}>
        Add new user
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
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>

          {!name && !email && !password ? (
            <button type="button" className="btn btn-primary" disabled>
              Add
            </button>
          ) : (
            <Button variant="primary" onClick={handleAddNewUser}>
              Add
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default USERAdd;
