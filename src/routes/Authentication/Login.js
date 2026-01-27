import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

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

          {/* Password input with icon INSIDE */}
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
