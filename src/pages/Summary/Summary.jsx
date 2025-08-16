import React from "react";
import "./Summary.scss";
import Navbar from "../../components/Navbar/Navbar";

const summaries = [
  {
    title: "Group Project Discussion",
    meta: "July 15, 2024 · 2:00 PM - 3:00 PM · Participants: 5",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCs1qnAaKTufo39ZU1pQO30SFMfwAAWG5Y-1ATCx9SNIsQfaCaQc157h25tqJLTXThrtnc8nbtmBsFqWo-X_1K7YKU22CR1kZnV83h36iITeteF_tD8Z9hdDjwnxU59REVFLQ1ZecrgDpHynMMZ3LMvQ1LrWlO1yGyptbJ1_M26PCgRxvqpzHUM32N5WSSwEsTSXObdAJ9o_oYPyAFiGB6xJXsvaTLNUvfZCGRhGQIQcoybwjqHd5ZJzNC1Fx3b4DIwE3cQ5gE0FpE",
  },
  {
    title: "Exam Prep Session",
    meta: "July 10, 2024 · 4:00 PM - 5:30 PM · Participants: 4",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDcgsakg9UmHnj0AzXerDNGC5ysqQvFbCkNMPj5sXDFJXs7bvzLM4ocmQojud_ibTdo2xjFyarR2Y7jQ1uxqDf6P5rJOIqY3fna3a68IgHy72XDDjd382UZIxLVq1lAFyVTrTVB4dQRmeeth1Uqnbpi2puKItjFkezu2XbVRyBo7HHc9QmxeZQeSXke_tXWfQlANGMkBm760SarSmFI6rf0eci-8fJT16HLZlrS2e9S6S4DVMpK-9F2oUYZ9-vyQFgZF5_y6aSbwkY",
  },
  {
    title: "Study Group Meeting",
    meta: "July 5, 2024 · 10:00 AM - 11:00 AM · Participants: 6",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBevBgAbqxq-8GzZcV8i9FBeBhQhY3_fKoeoS5C0oZ7DDDn6IyWLjaFFV38vZ-_sNk2OyLrcZrRbP6TbZWYH0hHhHlifks2Zr1E8Xo9q2DnOq_tQNj8jTcpyrq8w6QFry-YniCNe9ZU9ZNZ8KDOgOA7gZAfSJsE7cYxatGVkta8WCicNk-Pk20l8YuNB_7lKur6SzlTuZQt2wePxzqkFwJFLvrWxu-FeHKRH9hGtPtAdOQduSejZU5lcg0lSQDgurAwnNN2tBcSTAo",
  },
];

const Summary = () => {
  return (
    <div className="sc-root">
      <div className="sc-app">
        <Navbar />

        <main className="sc-main">
          <div className="sc-container">
            {/* Header row with title + note button */}
            <div className="sc-toolbar">
              <p className="sc-title">Meeting Summaries</p>
              <button className="sc-note-btn">
                <span>Note</span>
              </button>
            </div>

            {/* Big search input */}
            <div className="sc-search-row">
              <label className="sc-big-search">
                <div className="sc-big-search__wrap">
                  <div className="sc-big-search__icon" aria-hidden>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                    </svg>
                  </div>
                  <input
                    placeholder="Search summaries"
                    className="sc-big-search__input"
                    defaultValue=""
                    aria-label="Search summaries"
                  />
                </div>
              </label>
            </div>

            {/* Filter chips */}
            <div className="sc-filters">
              <button className="sc-chip">
                <p>Date</p>
                <span className="sc-chip__ico" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                  </svg>
                </span>
              </button>
              <button className="sc-chip">
                <p>Group</p>
                <span className="sc-chip__ico" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                  </svg>
                </span>
              </button>
              <button className="sc-chip">
                <p>Keywords</p>
                <span className="sc-chip__ico" aria-hidden>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Summary cards */}
            {summaries.map((s) => (
              <div key={s.title} className="sc-summary-pad">
                <div className="sc-summary">
                  <div className="sc-summary__text">
                    <p className="sc-summary__title">{s.title}</p>
                    <p className="sc-summary__meta">{s.meta}</p>
                    <button className="sc-view-btn">
                      <span>View Full Summary</span>
                    </button>
                  </div>
                  <div
                    className="sc-summary__img"
                    style={{ backgroundImage: `url("${s.image}")` }}
                  />
                </div>
              </div>
            ))}

            {/* Pagination */}
            <div className="sc-pagination">
              <a href="#" className="sc-page-ctrl" aria-label="Previous page">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" aria-hidden>
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </a>
              <a href="#" className="sc-page sc-page--active">1</a>
              <a href="#" className="sc-page">2</a>
              <a href="#" className="sc-page">3</a>
              <span className="sc-page sc-page--dots">...</span>
              <a href="#" className="sc-page">10</a>
              <a href="#" className="sc-page-ctrl" aria-label="Next page">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256" aria-hidden>
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Summary;
