import React from 'react';
import Header from '../../components/Header/Header';
import EmptyState from '../../components/EmptyState/EmptyState';
import MeetingsTable from '../../components/MeetingsTable/MeetingsTable';
import './MeetingsPage.scss';

const MeetingsPage = () => {
  return (
    <div className="meetings-page">
      <div className="meetings-page__container">
        <Header />
        <main className="meetings-page__main">
          <div className="meetings-page__content">
            {/* Header Section */}
            <div className="meetings-page__header">
              <div className="meetings-page__title">
                <span className="meetings-page__emoji">📹</span>
                <h1 className="meetings-page__heading">Meetings</h1>
              </div>
              <div className="meetings-page__actions">
                <button className="meetings-page__btn meetings-page__btn--secondary">
                  <svg className="meetings-page__btn-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <path d="M12 12h.01"></path>
                    <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
                    <path d="M16 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"></path>
                  </svg>
                  <span>Schedule Meeting</span>
                </button>
                <button className="meetings-page__btn meetings-page__btn--secondary">
                  <svg className="meetings-page__btn-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
                  </svg>
                  <span>Join Meeting</span>
                </button>
                <button className="meetings-page__btn meetings-page__btn--primary">
                  <svg className="meetings-page__btn-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <path d="m16 16 3-3-3-3"></path>
                    <path d="m2 16v-4a2 2 0 0 1 2-2h12"></path>
                  </svg>
                  <span>Start New Meeting</span>
                </button>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="meetings-page__search-section">
              <div className="meetings-page__search">
                <svg className="meetings-page__search-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                <input className="meetings-page__search-input" placeholder="Search meetings..." />
              </div>
              <div className="meetings-page__filters">
                <button className="meetings-page__filter-btn meetings-page__filter-btn--dropdown">
                  <span>All Meetings</span>
                  <svg className="meetings-page__filter-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
                <button className="meetings-page__filter-btn">
                  <span>Upcoming</span>
                </button>
                <button className="meetings-page__filter-btn">
                  <span>Past</span>
                </button>
              </div>
            </div>

            {/* Upcoming Meetings Section */}
            <div className="meetings-page__section">
              <h2 className="meetings-page__section-title">Upcoming Meetings</h2>
              <EmptyState />
            </div>

            {/* Past Meetings Section */}
            <div className="meetings-page__section">
              <h2 className="meetings-page__section-title">Past Meetings</h2>
              <MeetingsTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MeetingsPage;
