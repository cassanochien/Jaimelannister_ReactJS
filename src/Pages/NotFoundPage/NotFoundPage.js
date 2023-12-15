import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="notfound-page">
      <h2 className="notfound-page-txt1">
        <strong> Sorry, this page isn't available </strong>
      </h2>
      <p>
        The linked you followed may be broken, or the page may have been
        removed.
        <strong onClick={handleClick} className="notfound-page-txt2">
          {" "}
          Go back to LukaCyber{" "}
        </strong>
      </p>
    </div>
  );
};

export default NotFoundPage;
