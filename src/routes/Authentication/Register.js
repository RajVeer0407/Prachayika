import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const Register = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join Prachayika today</p>

        <form className="auth-form">
          <input
            type="text"
            placeholder="Full name"
            className="auth-input"
          />

          <input
            type="email"
            placeholder="Email address"
            className="auth-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="auth-input"
          />

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?{" "}
          <Link to="/login" className="auth-link">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
