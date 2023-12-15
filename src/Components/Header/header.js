import "boxicons";
import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/cartContext";
import LukaLogo from "../../assets/Images/LukaLogo.png";
import searchLogo from "../../assets/Images/searchLogo.png";

const Header = () => {
  const { cartItem } = useContext(CartContext);
  const inputRef = useRef();
  const handleInputChange = (event) => {
    document.title = event.target.value;
  };
  // useEffect(() => {
  //   inputRef.current.addEventListener("input", handleInputChange);
  //   return () => {
  //     inputRef.current.removeEventListener("input", handleInputChange);
  //   };
  // }, []);
  return (
    <div className="Header">
      <section className="myheader">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={LukaLogo} className="Cyber-logo" />
              LUKACYBER
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item dropdown"> */}
                {/* <a
                  className="nav-link dropdown-toggle"
                  id="nav-link-dropdown-toggle"
                  href="#"
                  // role="button"
                  // data-bs-toggle="dropdown"
                  // aria-expanded="false"
                >
                  Categories
                </a> */}
                {/* <Link
                  className="nav-link enabled"
                  id="nav-link-enabled"
                  to="/admin"
                >
                  Admin
                </Link> */}
                {/* <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        ReactJS
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        ASP.NET Core
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        JavaScript
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        SQL
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        All
                      </a>
                    </li>
                  </ul> */}
                {/* </li> */}
                {/* <form className="d-flex" role="search">  btn btn-outline-info  */}

                {/* <div>
                  <button className="" type="submit">
                    <img src={searchLogo} className="logosearch" />
                  </button>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search for anything"
                    aria-label="Search"
                    ref={inputRef}
                  />
                </div> */}
                <form className="search-container">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search for anything"
                    aria-label="Search"
                    ref={inputRef}
                  />
                  <a className="" type="submit">
                    <img src={searchLogo} className="logosearch" alt="Search" />
                  </a>
                </form>

                {/* </form> */}
                <li className="nav-item">
                  <a
                    className="nav-link enabled"
                    id="nav-link-enabled"
                    href="#"
                  >
                    Road map
                  </a>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link enabled"
                    id="nav-link-enabled"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="showCart">
                    <button
                      className="btn"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <box-icon name="cart" />
                      <div className="cart-icon">{cartItem.length}</div>
                      {/* <box-icon name="cart" />{cartItem.length} */}
                    </button>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link enabled"
                    id="nav-link-enabled"
                    to="/login"
                  >
                    Login/Signup
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Header;
