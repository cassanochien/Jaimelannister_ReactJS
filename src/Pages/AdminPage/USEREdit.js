import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdModeEdit } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function USEREdit({ id }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id,
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      setValues({
        ...values,
        id: res.data.id,
        name: res.data.name,
        email: res.data.email,
        password: res.data.password,
      });
    });
  }, []);

  const handleEditUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://localhost:3000/users/${id}`,
        values
      );
      setShow(false);
      alert("Chỉnh sửa thành công!");
      navigate("/admin/manageruser");
      window.location.reload();
      console.log("clicked");
    } catch (error) {
      console.log(error);
    }
  };

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
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">PassWord</label>
            <input
              type="text"
              className="form-control"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditUser}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default USEREdit;
