import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Header.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/dashboard" className="header__logo">
          <svg className="header__logo-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
            <path d="m12 14 4-4"></path>
            <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
          </svg>
          <h2 className="header__logo-text">StudyGroup</h2>
        </Link>
        <nav className="header__nav">
          <Link to="/dashboard" className={`header__nav-link ${location.pathname === '/dashboard' ? 'header__nav-link--active' : ''}`}>Home</Link>
          <Link to="/groups" className={`header__nav-link ${location.pathname === '/groups' ? 'header__nav-link--active' : ''}`}>Groups</Link>
          <Link to="/meetings" className={`header__nav-link ${location.pathname === '/meetings' ? 'header__nav-link--active' : ''}`}>Meetings</Link>
          <Link to="/summaries" className={`header__nav-link ${location.pathname === '/summaries' ? 'header__nav-link--active' : ''}`}>Summaries</Link>
          <Link to="/resources" className={`header__nav-link ${location.pathname === '/resources' ? 'header__nav-link--active' : ''}`}>Resources</Link>
        </nav>
      </div>
      <div className="header__right">
        <div className="header__search">
          <svg className="header__search-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input className="header__search-input" placeholder="Search" />
        </div>
        <button className="header__notification-btn">
          <svg className="header__notification-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
        </button>
        <div className="header__profile">
          <button 
            className="header__avatar" 
            onClick={() => setShowDropdown(!showDropdown)}
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDn6laUoG5FI5sixAkp1l3FZdMsCQAo5xTaOPawe0RSK4UJr8tfSFJf9sOQiYU3oxMq-3mPaeBwe9IPKLVw_eAWe3AwPIvFVXZ615CZjLFBbh2BCxUhyPHdT51Ltmu1vFXpWJD2rLiEdxJQnURsSzMx2wECuiCfa-1l5E7_9AxeNWWhXK-YfKsdezPWagT29S8aZhUKyaEpWQvgZ_oWUWSlxFCPjhm00JT-Zcv3NAHsLwDMXsLJrwfupVdcN3Q3NrWt9Vs7__ywk8h")'
            }}
          ></button>
          {showDropdown && (
            <div className="header__dropdown">
              <div className="header__dropdown-header">
                <div className="header__dropdown-avatar"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDn6laUoG5FI5sixAkp1l3FZdMsCQAo5xTaOPawe0RSK4UJr8tfSFJf9sOQiYU3oxMq-3mPaeBwe9IPKLVw_eAWe3AwPIvFVXZ615CZjLFBbh2BCxUhyPHdT51Ltmu1vFXpWJD2rLiEdxJQnURsSzMx2wECuiCfa-1l5E7_9AxeNWWhXK-YfKsdezPWagT29S8aZhUKyaEpWQvgZ_oWUWSlxFCPjhm00JT-Zcv3NAHsLwDMXsLJrwfupVdcN3Q3NrWt9Vs7__ywk8h")'
                  }}
                ></div>
                <div className="header__dropdown-info">
                  <h4 className="header__dropdown-name">Sarah Johnson</h4>
                  <p className="header__dropdown-email">sarah.j@example.com</p>
                </div>
              </div>
              <div className="header__dropdown-divider"></div>
              <button 
                className="header__dropdown-item" 
                onClick={() => {
                  // Call logout and navigate regardless of server response
                  logout();
                  navigate('/login', { replace: true });
                }}
              >
                <svg className="header__dropdown-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
