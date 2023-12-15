import React from "react";
import "./Login.css";
import user_icon from "../../assets/Images/person.png";
import email_icon from "../../assets/Images/email.png";
import password_icon from "../../assets/Images/password.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigateToLogin = useNavigate();

  const handleSignup = async () => {
    if (name && email && password) {
      try {
        const response = await axios.post("http://localhost:3000/users", {
          name,
          email,
          password,
        });
        alert("Successfullly !");
        navigateToLogin("/login");
      } catch (error) {
        setError("An error occurred during signup.");
      }
    }
  };
  return (
    <>
      <button onClick={() => navigateToLogin("/login")}>Login</button>
      <div className="login-container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email "
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {!name && !email && !password ? (
          <div className="button-submit-change">
            <button type="button" className="btn btn-outline-primary" disabled>
              Sign up
            </button>
          </div>
        ) : (
          <div className="button-submit-change">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Signup;
