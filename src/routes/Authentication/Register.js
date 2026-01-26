import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./auth.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

          {/* Password */}
          <div className="input-with-icon">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="auth-input auth-input-password"
            />
            <button
              type="button"
              className="password-icon"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="input-with-icon">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="auth-input auth-input-password"
            />
            <button
              type="button"
              className="password-icon"
              onClick={() =>
                setShowConfirmPassword((prev) => !prev)
              }
              aria-label={
                showConfirmPassword
                  ? "Hide confirm password"
                  : "Show confirm password"
              }
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

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
