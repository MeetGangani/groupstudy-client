import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="account-root">
      <div className="account-container">
        <div className="logo-container">
          <a href="#" className="logo-link">
            <svg
              className="logo-icon"
              fill="none"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z"
                fill="currentColor"
              ></path>
            </svg>
            <h1 className="logo-text">StudyGroup</h1>
          </a>
        </div>
        <div className="form-box">
          <div className="form-heading">
            <h2>Create your account</h2>
            <p>Join the community and start learning together.</p>
          </div>
          <form className="form" autoComplete="off">
            <div className="form-group">
              <label className="form-label" htmlFor="full-name">
                Full Name
              </label>
              <input
                className="form-input"
                id="full-name"
                name="full-name"
                placeholder="e.g. John Doe"
                required
                type="text"
              />
              <div className="form-icon">
                <svg
                  className="icon-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email-address">
                Email address
              </label>
              <input
                autoComplete="email"
                className="form-input"
                id="email-address"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
              <div className="form-icon">
                <svg
                  className="icon-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                autoComplete="new-password"
                className="form-input"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
              <div className="form-icon">
                <svg
                  className="icon-eye"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                autoComplete="new-password"
                className="form-input"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                required
                type="password"
              />
              <div className="form-icon">
                <svg
                  className="icon-success"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <button
                className="btn-submit"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
          <p className="login-link">
            Already have an account?{" "}
            <a href="#" className="login-a">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
