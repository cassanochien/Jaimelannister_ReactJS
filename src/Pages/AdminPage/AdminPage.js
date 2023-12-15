import React, { useState } from "react";
import "./Admin.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";

const AdminPage = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="admin-body">
      <div className="grid-container">
        <Header handleShow={handleShow} />
        <Sidebar show={show} handleShow={handleShow} />
        <Home />
      </div>
    </div>
  );
};

export default AdminPage;
