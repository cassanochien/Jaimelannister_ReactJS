import React from "react";
import "./Login.css";
import user_icon from "../../assets/Images/person.png";
import email_icon from "../../assets/Images/email.png";
import password_icon from "../../assets/Images/password.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigateToHome = useNavigate();
  const navigateToSignup = useNavigate();

  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await axios.get("http://localhost:3000/users", {
          email,
          password,
        });
        const users = response.data;
        const matchedUser = users.find(
          (user) => user.email === email && user.password === password
        );
        if (matchedUser) {
          // localStorage.setItem("token", response.data.token);
          alert("Login successfully");
          navigateToHome("/");
        } else {
          alert("Invalid email or password !");
        }
      } catch (error) {
        setError("An error occurred during login.");
      }
    }
  };
  return (
    <>
      <button onClick={() => navigateToSignup("/signup")}>Sign up</button>
      <div className="login-container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div></div>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email"
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
        {!email && !password ? (
          <div className="button-submit-change">
            <button type="button" className="btn btn-outline-primary" disabled>
              Login
            </button>
          </div>
        ) : (
          <div className="button-submit-change">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
