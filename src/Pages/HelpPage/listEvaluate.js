import React, { useState } from "react";
import "./App2.css";
import Evaluate from "../HelpPage/Evaluate";
import { DataEvaluate } from "./dataEvaluate";

const ListEvaluate = () => {
  const [data, setData] = useState(DataEvaluate);
  return (
    <div className="body11">
      <div className="nav-header">
        <div className="cs-title">
          <a href="">Customer Service</a>
        </div>
        <div className="nav-item-active">
          <a href="">Home</a>
        </div>
        <div className="nav-item">
          <a href="">Digital Services and Device Support</a>
        </div>
      </div>
      <div className="page-wrapper-hero-banner">
        <div className="page-container">
          <div class="fs-heading-bolded">
            <font>Welcome to LukaCyber Customer Service</font>
          </div>
          <p className="header-subtext-subtext-container">
            <font>
              What would you like help with today? You can quickly take care of
              most things here, or connect with us when needed.
            </font>
          </p>
          {/* Khung bao bọc các card */}
          <div className="issue-card-container">
            {data.map((item) => (
              <Evaluate
                key={item.id}
                id={item.id}
                imageEvaluate={item.imageEvaluate}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <a href="">
        <div class="navFooterBackToTop">
          <div>Back to top</div>
        </div>
      </a> */}

      {/* <div class="navFooter">
        <div class="navFooterVerticalColumn-navAccessibility">
          <div class="navFooterVerticalRow-navAccessibility">
            <div class="navFooterLinkCol">
              <div class="navFooterColHead">
                <font>Get to Know Us</font>
              </div>
              <ul>
                <li>Careers</li>
                <li>Blog</li>
                <li>About Amazon</li>
                <li>Investor Relations</li>
                <li>Amazon Devices</li>
                <li>Amazon Science</li>
              </ul>
            </div>

            <div class="navFooterLinkCol">
              <div class="navFooterColHead">
                <font>Make Money with Us</font>
              </div>
              <ul>
                <li>Sell products on Amazon</li>
                <li>Sell on Amazon Business</li>
                <li>Sell apps on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
                <li>Self-Publish with Us</li>
                <li>Host an Amazon Hub</li>
                <li>
                  See More Make Money <br /> with Us
                </li>
              </ul>
            </div>

            <div class="navFooterLinkCol">
              <div class="navFooterColHead">
                <font>Amazon Payment Products</font>
              </div>
              <ul>
                <li>Amazon Business Card</li>
                <li>Shop with Points</li>
                <li>Reload Your Balance</li>
                <li>Amazon Currency Converter</li>
              </ul>
            </div>

            <div class="navFooterLinkCol">
              <div class="navFooterColHead">
                <font>Let Us Help You</font>
              </div>
              <ul>
                <li>Amazon and COVID-19</li>
                <li>Your Account</li>
                <li>Your Orders</li>
                <li>
                  Shipping Rates &<br /> Policies
                </li>
                <li>Returns & Replacements</li>
                <li>
                  Manage Your Content <br /> and Devices
                </li>
                <li>Amazon Assistant</li>
                <li>Help</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default ListEvaluate;
