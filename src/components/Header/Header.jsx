import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <svg className="header__logo-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
            <path d="m12 14 4-4"></path>
            <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
          </svg>
          <h2 className="header__logo-text">StudyGroup</h2>
        </div>
        <nav className="header__nav">
          <a href="#" className="header__nav-link">Home</a>
          <a href="#" className="header__nav-link">Groups</a>
          <a href="#" className="header__nav-link header__nav-link--active">Meetings</a>
          <a href="#" className="header__nav-link">Calendar</a>
          <a href="#" className="header__nav-link">Resources</a>
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
        <div 
          className="header__avatar" 
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDn6laUoG5FI5sixAkp1l3FZdMsCQAo5xTaOPawe0RSK4UJr8tfSFJf9sOQiYU3oxMq-3mPaeBwe9IPKLVw_eAWe3AwPIvFVXZ615CZjLFBbh2BCxUhyPHdT51Ltmu1vFXpWJD2rLiEdxJQnURsSzMx2wECuiCfa-1l5E7_9AxeNWWhXK-YfKsdezPWagT29S8aZhUKyaEpWQvgZ_oWUWSlxFCPjhm00JT-Zcv3NAHsLwDMXsLJrwfupVdcN3Q3NrWt9Vs7__ywk8h")'
          }}
        ></div>
      </div>
    </header>
  );
};

export default Header;
