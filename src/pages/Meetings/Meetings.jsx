import React from "react";
import "./Meetings.scss";
import Navbar from "../../components/Navbar/Navbar";

const upcoming = [
  {
    when: "In 1 hour",
    title: "Weekly Study Session",
    group: "Group: Math 101",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvRGmCwWR_mSm0xfMo0A0ZOVoF2O-TVjqgJ7EeUjtm-SJv9aHgnAVcCXuEl-4Ob1V8ho9IJxsMGEYzDANEvlc5WraWFw-knoJKcP8PW75XfKj2oJsIX6LrYppEwOZ4nY1ZmTau41l5wvvruoPeiIafCj_s_YL9yRDjqn6ndefT-75fmKPgWb6L8naI1gEiYUDnUFozgwmmgU8TVKq89OvLMr3nTMIVeS96JfuFiBPLGn7zNAHEUxbYX3kvTkqSl5S1iR3mS2UbO8o",
    cta: "Join",
  },
  {
    when: "Tomorrow, 2 PM",
    title: "Project Discussion",
    group: "Group: Science Project Team",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAP-cjGSrLPUezS66AkrCWRVuQP7Yfs0cIM09RS99yzK6RWs2NKCOH-jSOFM9_uIdf0EVlBGrNHG7KSEdXuZzpYlUIklNQl84asacZk5KKFWVNR9FhZb-Eyr3cP9xkTjTTePJnknObTcbQWSSaA9vn2-oZIsAUOSi7oA83knE7IvMWFJ_fhkmN1KC-zVYqWsjjfciFzDkrvcfm6Enqc48XVIQGDh4lGli7Sc_lbh-CDyiQ5-GtjtoUUngsFf98hNvcDfi7hcTVoPmM",
    cta: "View Details",
  },
];

const past = [
  {
    when: "July 15, 2024",
    title: "Final Exam Review",
    group: "Group: History 202",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABujRy0YpVrv6WHzdpi5XDLx4Qownf90U2kk8MRwaXucWsl9w8cfHj_JM8cvJq6wbDBsr_ElidROn-8BC1tDyhK2Un1l-sQER5ZmMVyfB5BnCgWgUpoZj6-oh4VB5A8XCAagOWsSieBPkR9vuMmqBYocBxlDGIYyJsbGcvVZr644DrLDX7mAEGOZRvJy53yl2ahmqcc9aSLOUt_FifoD19XgiUI1T2_Tfg-gh0DFuWSlt2cHd5ad89k9HY3mWIYYLWjqwXS5wkOY8",
    cta: "View Summary",
  },
];

const Meetings = () => {
  return (
    <div className="mt-root">
        <Navbar/>
      <div className="mt-container">
        {/* Top toolbar */}
        <div className="mt-toolbar">
          <p className="mt-title">Meetings</p>
          <button className="mt-btn mt-btn--note">
            <span>VideoCamera</span>
          </button>
        </div>

        {/* Start/Join row */}
        <div className="mt-row">
          <div className="mt-actions">
            <button className="mt-btn mt-btn--primary">
              <span>Start a meeting</span>
            </button>
            <button className="mt-btn mt-btn--neutral">
              <span>Join a meeting</span>
            </button>
          </div>
        </div>

        {/* Schedule button */}
        <div className="mt-row mt-row--pad">
          <button className="mt-btn mt-btn--neutral mt-btn--icon">
            <span className="mt-btn__icon" aria-hidden>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
              </svg>
            </span>
            <span>Schedule a meeting</span>
          </button>
        </div>

        {/* Upcoming */}
        <h2 className="mt-h2">Upcoming Meetings</h2>
        {upcoming.map((m) => (
          <div key={m.title} className="mt-card-pad">
            <div className="mt-card">
              <div className="mt-card__text">
                <p className="mt-when">{m.when}</p>
                <p className="mt-title-sm">{m.title}</p>
                <p className="mt-meta">{m.group}</p>
                <button className="mt-btn mt-btn--chip">
                  <span>{m.cta}</span>
                </button>
              </div>
              <div
                className="mt-card__img"
                style={{ backgroundImage: `url("${m.image}")` }}
              />
            </div>
          </div>
        ))}

        {/* Past */}
        <h2 className="mt-h2">Past Meetings</h2>
        {past.map((m) => (
          <div key={m.title} className="mt-card-pad">
            <div className="mt-card">
              <div className="mt-card__text">
                <p className="mt-when">{m.when}</p>
                <p className="mt-title-sm">{m.title}</p>
                <p className="mt-meta">{m.group}</p>
                <button className="mt-btn mt-btn--chip">
                  <span>{m.cta}</span>
                </button>
              </div>
              <div
                className="mt-card__img"
                style={{ backgroundImage: `url("${m.image}")` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meetings;
