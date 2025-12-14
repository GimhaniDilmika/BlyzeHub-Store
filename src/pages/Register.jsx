import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import bgImage from "../assets/b1.jpg"; // 👈 IMPORT IMAGE HERE

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // success alert
    alert("Registration successful! Please login.");

    // redirect to login page
    navigate("/login");
  };

  return (
    <div
      className="register-bg"
      style={{
        backgroundImage: `url(${bgImage})`, // 👈 BACKGROUND IMAGE HERE
      }}
    >
      <div className="register-overlay"></div>

      <div className="register-box">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" required />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="login-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;
