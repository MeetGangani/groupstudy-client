import React from 'react';
import './EmptyState.scss';

const EmptyState = () => {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">
        <svg fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="64">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
          <circle cx="12" cy="13" r="3"></circle>
        </svg>
      </div>
      <h3 className="empty-state__title">No upcoming meetings</h3>
      <p className="empty-state__description">
        You have no meetings scheduled. Get started by scheduling a new one.
      </p>
      <button className="empty-state__btn">
        <svg className="empty-state__btn-icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
        <span>Schedule Meeting</span>
      </button>
    </div>
  );
};

export default EmptyState;
