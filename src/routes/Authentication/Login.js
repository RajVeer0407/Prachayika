import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const LoginPage = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Login to your account</p>

        <form className="auth-form">
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
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/register" className="auth-link">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
