import React from "react";
import LukaLogo from "../../assets/Images/LukaLogo.png";
import { Link } from "react-router-dom";
import instagramLogo from "../../instagramLogo.svg";

const Footer = () => {
  return (
    // <div classsNameName="Footer">
    //   <section className="myfooter">
    //     <div className="container">
    //       <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    //         <div className="col mb-3">
    //           <a
    //             href="/"
    //             className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
    //           >
    //             <svg className="bi me-2" width={40} height={32}>
    //               <use xlinkHref="#bootstrap" />
    //             </svg>
    //           </a>
    //           <Link className="footer-brand" to="/">
    //             <img src={LukaLogo} className="Cyber-logo" />
    //             LUKACYBER
    //           </Link>
    //         </div>
    //         <div className="col mb-3"></div>
    // <div className="col mb-3">
    //   <h5 className="nav-info">Home</h5>
    //   <ul className="nav flex-column">
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         LukaCyber Business
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Teach on LukaCyber
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Get the App
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         About us
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Contact us
    //       </a>
    //     </li>
    //   </ul>
    // </div>
    // <div className="col mb-3">
    //   <h5 className="nav-info">Reviews</h5>
    //   <ul className="nav flex-column">
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Careers
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Blog
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <Link to="/help" className="nav-link p-0 text-body-secondary">
    //         Help and Support
    //       </Link>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Affilitate
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Investors
    //       </a>
    //     </li>
    //   </ul>
    // </div>
    // <div className="col mb-3">
    //   <h5 className="nav-info">About</h5>
    //   <ul className="nav flex-column">
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Terms
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Privacy policy
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Cookies settings
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Sitemap
    //       </a>
    //     </li>
    //     <li className="nav-item mb-2">
    //       <a href="#" className="nav-link p-0 text-body-secondary">
    //         Accessibility statement
    //       </a>
    //     </li>
    //   </ul>
    //   <p className="text-body-secondary">© 2023 LukaCyber, Inc.</p>
    // </div>
    //       </footer>
    //     </div>
    //   </section>
    // </div>

    <div className="container">
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h5 className="nav-info">Home</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  LukaCyber Business
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Teach on LukaCyber
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Get the App
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="nav-info">Reviews</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/help" className="nav-link p-0 text-body-secondary">
                  Help and Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="col mb-3">
            <h5 className="nav-info">About</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Terms
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Privacy policy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Cookies settings
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Sitemap
                </a>
              </li>
              <li className="nav-item mb-2">
                <Link to="/admin" className="nav-link p-0 text-body-secondary">
                  Accessibility statement
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2023 LukaCyber, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref="#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <svg className="bi" width={24} height={24}>
                  <use xlinkHref={<facebookLogo />} />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
