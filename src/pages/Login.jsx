import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import bgImage from "../assets/b1.jpg";   // 👈 IMPORT IMAGE HERE

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home"); // change if needed
  };

  return (
    <div
      className="auth-bg"
      style={{
        backgroundImage: `url(${bgImage})`, // 👈 BACKGROUND IMAGE HERE
      }}
    >
      <div className="auth-overlay"></div>

      <div className="auth-box">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="switch-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
