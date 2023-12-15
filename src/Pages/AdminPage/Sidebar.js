import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
} from "react-icons/bs";
// import LukaCyberLogo from "../../assets/Images/LukaLogo.png";

const Sidebar = ({ show, handleShow }) => {
  const [close, setClose] = useState(false);
  function handleCloses() {
    setClose(!close);
  }
  const navigate = useNavigate();
  return (
    <aside id="sidebar" className={show ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand" onClick={(e) => navigate("/")}>
          {/* <LukaCyberLogo className="icon_header" /> */}
          LukaCyber
        </div>
        <span className="icon close_icon" onClick={handleCloses}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" />
            Dashboard
          </a>
        </li>

        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" />
            Orders
          </a>
        </li>

        <li className="sidebar-list-item">
          <Link to="/admin/manageruser">
            <BsPeopleFill className="icon" />
            Customers
          </Link>
        </li>

        <li className="sidebar-list-item">
          <Link to="/admin/managerproduct">
            <BsFillArchiveFill className="icon" />
            Products
          </Link>
        </li>
        {/* <li className="sidebar-list-item">
          <a href="">
            <BsFillGrid3X3GapFill className="icon" />
            Categories
          </a>
        </li> */}
      </ul>
    </aside>
  );
};

export default Sidebar;
