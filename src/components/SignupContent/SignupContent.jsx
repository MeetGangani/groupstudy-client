import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './SignupContent.scss';

const SignupContent = () => {
  const navigate = useNavigate();
  const { register, user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'student',
    termsAgreed: false
  });

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    if (!formData.termsAgreed) {
      setError('Please agree to the Terms of Service');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    try {
      const userData = {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        role: formData.role
      };

      const result = await register(userData);
      if (result.success) {
        navigate('/dashboard');
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (err) {
      setError('An error occurred during registration');
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="signup-content">
      <div className="signup-content__grid">
        {/* Left Side - Hidden on mobile */}
        <div className="signup-content__left-side">
          <div className="signup-content__branding">
            <img 
              alt="Platform Logo" 
              className="signup-content__brand-logo" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3zP0Tsn6hVQ96mU4DCttu_j_MNF-Nwv8HNdo-V5appS_fl10yjxRVY1wWUYhh5FbxDoAe3V-4LE1i01J7pbKdTCy7IDsZ1hta_PZjbm00Gib3-ZBwDayhVHDIa1wSFAy0k9a0ZnX9y3xWWwY9Tri_DO-OuStkmReZMHggc2M1dGvI8oCiOSv4Cc-KkAFDotKAK4go8V-5YUgzpFK2iCQp60lHKf-lgrNqDEm_VwTa0xz2EuzvXJHYx9FbwjJ7GdB2DvLEjJh6AdZN" 
            />
            <img 
              alt="Educational Illustration" 
              className="signup-content__illustration" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAuZL_cFEJwsURQ7fnhzERRFeV2C0OWymH_f26ykNRBPuYh9Lol-N9Xv9hBEmbBtdnzDRSgCR1N-9EsEzVqnkhkcxrK38Vf353cocsG8UxFcfqxPMPV5ceqBDLLC8aOktI14GkoIXdn-Rv2dy7kAAYKCYSVCBDVcrtKtLLRYNs-S07c5qUksJpxIEi7V2SHthFxuKQMe7GQ1P5QEM0wstP_IyYF8FMrdxDqgWSuKQCWexDTua9T5CiO9gNZge3QHdZN2VxgIEw9np0" 
            />
            <h1 className="signup-content__brand-title">Study together, achieve more.</h1>
            <p className="signup-content__brand-subtitle">Join a community of learners and unlock your full potential.</p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="signup-content__right-side">
          <div className="signup-content__form-container">
            {/* Mobile Logo */}
            <div className="signup-content__mobile-header">
              <img 
                alt="Platform Logo" 
                className="signup-content__mobile-logo" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmoz02cvphL7pWfNDK-nbuNnr4VPUWyx6TMXY_9VKhjxLcoJbWEj26vVQ34e_YKXbNDj7baJWzxSKnnX-lB-_WgJ0fBupJtYQVG9868TzuNTIPabeUWl574TwucIpidgMvgRSF68ddZo9YhntQ-EGjl-C7Plc84y1E9Y_23kcF7HZnEMutTCP7hev2LlLm_lHPYLKwImc-WC9YjPP8JCyahgxg0nSQ2Ld7jJJmGy1US6orgV_82O07kfti4V2ff3fMOu4vFzdmKjbX" 
              />
            </div>

            {/* Form Card */}
            <div className="signup-content__form-card">
              <div className="signup-content__form-header">
                <h2 className="signup-content__form-title">Create an Account</h2>
                <p className="signup-content__form-subtitle">Join our community and start collaborating today.</p>
              </div>

              <form onSubmit={handleSubmit} className="signup-content__form">
                {/* Full Name */}
                <div className="signup-content__field">
                  <label className="sr-only" htmlFor="full-name">Full Name</label>
                  <input
                    id="full-name"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Full Name"
                    className="signup-content__input"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Email */}
                <div className="signup-content__field">
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Email"
                    className="signup-content__input"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Password */}
                <div className="signup-content__field signup-content__field--password">
                  <label className="sr-only" htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="new-password"
                    placeholder="Password"
                    className="signup-content__input signup-content__input--with-icon"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="signup-content__password-toggle"
                    onClick={() => togglePasswordVisibility('password')}
                  >
                    <svg className="signup-content__eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="signup-content__field signup-content__field--password">
                  <label className="sr-only" htmlFor="confirm-password">Confirm Password</label>
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    autoComplete="new-password"
                    placeholder="Confirm Password"
                    className="signup-content__input signup-content__input--with-icon"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="signup-content__password-toggle"
                    onClick={() => togglePasswordVisibility('confirm')}
                  >
                    <svg className="signup-content__eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </button>
                </div>

                {/* Role Selection */}
                <fieldset className="signup-content__fieldset">
                  <legend className="sr-only">Role</legend>
                  <div className="signup-content__radio-group">
                    <label className="signup-content__radio-label">
                      <input
                        id="role-student"
                        name="role"
                        type="radio"
                        value="student"
                        checked={formData.role === 'student'}
                        onChange={handleInputChange}
                        className="signup-content__radio"
                      />
                      <span>Student</span>
                    </label>
                    <label className="signup-content__radio-label">
                      <input
                        id="role-teacher"
                        name="role"
                        type="radio"
                        value="teacher"
                        checked={formData.role === 'teacher'}
                        onChange={handleInputChange}
                        className="signup-content__radio"
                      />
                      <span>Teacher</span>
                    </label>
                  </div>
                </fieldset>

                {/* Terms Agreement */}
                <div className="signup-content__checkbox-field">
                  <input
                    id="terms-agreement"
                    name="termsAgreed"
                    type="checkbox"
                    required
                    checked={formData.termsAgreed}
                    onChange={handleInputChange}
                    className="signup-content__checkbox"
                  />
                  <label htmlFor="terms-agreement" className="signup-content__checkbox-label">
                    I agree to the <a href="#" className="signup-content__link">Terms of Service</a>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="signup-content__submit-section">
                  <button type="submit" className="signup-content__submit-btn">
                    Register
                  </button>
                </div>
              </form>

              {/* Social Login */}
              <div className="signup-content__social-section">
                <div className="signup-content__divider">
                  <div className="signup-content__divider-line"></div>
                  <div className="signup-content__divider-text">
                    <span>Or continue with</span>
                  </div>
                </div>

                <div className="signup-content__social-buttons">
                  <a href="#" className="signup-content__social-btn">
                    <span className="sr-only">Sign in with Google</span>
                    <svg className="signup-content__social-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.107 4.107 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="signup-content__social-btn">
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg className="signup-content__social-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path clipRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.336-.012 2.41-.012 2.737 0 .268.18.58.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" fillRule="evenodd" />
                    </svg>
                  </a>
                  <a href="#" className="signup-content__social-btn">
                    <span className="sr-only">Sign in with Microsoft</span>
                    <svg className="signup-content__social-icon" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.5 2.5h6.167v6.167H2.5V2.5zM11.333 2.5H17.5v6.167h-6.167V2.5zM2.5 11.333h6.167V17.5H2.5v-6.167zM11.333 11.333H17.5V17.5h-6.167v-6.167z" />
                    </svg>
                  </a>
                </div>
              </div>

              {error && <div className="signup-content__error">{error}</div>}
              
              {/* Login Link */}
              <p className="signup-content__login-link">
                Already have an account? <Link to="/login" className="signup-content__link">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupContent;
