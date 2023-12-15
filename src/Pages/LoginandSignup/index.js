import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import user_icon from "../../assets/Images/person.png";
import email_icon from "../../assets/Images/email.png";
import password_icon from "../../assets/Images/password.png";
import axios from "axios";

// const initFormValue = {
//   firstName: "",
//   lastName: "",
//   emai: "",
//   password: "",
//   confirmPassword: "",
// };

// const isEmptyValue = (value) => {
//   return !value || value.trim().length < 1;
// };

// const isEmailValid = (email) => {
//   return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email); //ktra giatri email truyen vao co dung dinh dang 0
// };
const Endup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setAction("Login");
    try {
      const response = await axios.post("http://localhost:3000/users", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("Login successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignup = async () => {
    setAction("Sign up");
    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      alert("Successfullly !");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email Id"
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
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password?<span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={handleSignup}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign up" ? "submit gray" : "submit"}
          onClick={handleLogin}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Endup;
