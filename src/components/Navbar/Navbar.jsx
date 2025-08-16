import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header className="sh-navbar">
      <div className="sh-left">
        <div className="sh-logo">
          <div className="sh-logo__icon" aria-hidden>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <h2 className="sh-logo__text">StudyHub</h2>
        </div>

        <nav className="sh-links">
          <a href="#">Dashboard</a>
          <a href="#">Meetings</a>
          <a href="#">Summaries</a>
          <a href="#">Groups</a>
          <a href="#">Resources</a>
        </nav>
      </div>

      <div className="sh-right">
        <label className="sh-search">
          <div className="sh-search__wrap">
            <div className="sh-search__icon" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
              </svg>
            </div>
            <input
              placeholder="Search"
              className="sh-search__input"
              defaultValue=""
              aria-label="Search"
            />
          </div>
        </label>

        <button className="sh-bell" aria-label="Notifications">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" aria-hidden>
            <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
          </svg>
        </button>

        <div
          className="sh-avatar"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbmwJbAOCaQR1Vm2tb7BTqI2KNM2uIEibuWmo5UsDSsqIJAEHHFEXqGbq2lo53phI2s5jMxE9zipc25qnZetXI_aSh_kbnENQncgPL0B-KaN_0TSRvl0hRAIpSDlfhWCRISyW-tN7RO_WzrzcxzD26fni0GWueJbZrrVNQOtofh5B-QpNIsbx8tPI_fsgL8ZRkMgB6HRTs5dLNjbI-HmAgXWYWEVgQNKZYDm_M3Tgyuz3v8jSlvzFPpzLs4CqApZtkrpY0AktLGXE")' }}
          aria-label="User Avatar"
        />
      </div>
    </header>
  );
};

export default Navbar;
