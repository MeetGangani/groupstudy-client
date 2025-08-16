import React, { useState } from 'react';
import './Login.scss';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <svg className="login-logo-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 6.253v11.494m-5.747-8.247l11.494 4.994M5.753 17.747l11.494-4.994" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </div>
          <h1 className="login-title">Welcome Back to StudyConnect</h1>
          <p className="login-subtitle">Connect. Collaborate. Grow.</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <input
              className="form-input"
              id="email"
              name="email"
              type="text"
              placeholder="Email or Username"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group input-group--password">
            <input
              className="form-input"
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg className="eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              ) : (
                <svg className="eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a10.05 10.05 0 013.54-5.325m10.232 5.325a10.05 10.05 0 003.54-5.325M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3l18 18" />
                </svg>
              )}
            </button>
          </div>

          <div className="forgot-password">
            <a href="#" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="login-btn">
            Log In
          </button>

          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">OR</span>
            <div className="divider-line"></div>
          </div>

          <button type="button" className="social-btn">
            <svg className="google-icon" fill="none" viewBox="0 0 48 48">
              <path clipRule="evenodd" d="M44.5 20.9859C44.5 19.5379 44.3727 18.1279 44.1364 16.7649H24.1818V24.8189H35.8182C35.2273 27.5129 33.7273 29.8399 31.6364 31.3209V36.3269H38.2727C42.2273 32.7539 44.5 27.3519 44.5 20.9859Z" fill="#4285F4" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24.1818 44.4998C30.5909 44.4998 35.9545 42.4268 39.8182 38.8178L32.8182 34.0908C30.8182 35.4088 27.8636 36.3178 24.1818 36.3178C17.5 36.3178 11.8182 31.9088 9.90909 26.0908H3V31.0968C6.90909 38.8638 14.8182 44.4998 24.1818 44.4998Z" fill="#34A853" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M9.90909 26.0911C9.45455 24.7731 9.18182 23.3631 9.18182 21.9091C9.18182 20.4551 9.45455 19.0451 9.90909 17.7271V12.7211H3C1.59091 15.4151 0.818182 18.5451 0.818182 21.9091C0.818182 25.2731 1.59091 28.4031 3 31.0971L9.90909 26.0911Z" fill="#FBBC05" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M24.1818 7.50009C27.9545 7.50009 31.0909 8.77309 33.6364 11.0911L40 4.72709C35.9091 1.22709 30.5455 -0.000908137 24.1818 -0.000908137C14.8182 -0.000908137 6.90909 5.63509 3 13.4021L9.90909 18.4081C11.8182 12.5901 17.5 7.50009 24.1818 7.50009Z" fill="#EA4335" fillRule="evenodd"></path>
            </svg>
            <span>Continue with Google</span>
          </button>
        </form>

        <div className="login-footer">
          Don't have an account? <a href="#" className="signup-link">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
