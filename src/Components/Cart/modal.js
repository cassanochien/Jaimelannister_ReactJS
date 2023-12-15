import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";

const ModalC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="modal-confirmC">
      <div className="d-grid">
        <button className="btn btn-info" type="button" onClick={handleShow}>
          Order now
        </button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If you sure about that, click Accept to pay for your order and click
          Cancel if your don't want.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Link className="btn btn-primary" to="/checkout">
            Accept
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalC;
