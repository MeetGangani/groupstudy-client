import React from 'react';
import './QuickActions.scss';

const QuickActions = () => {
  const actions = [
    {
      id: 1,
      title: 'Start a Meeting',
      description: 'Initiate a new study session.',
      bgColor: 'indigo',
      icon: (
        <svg className="quick-actions__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Join a Meeting',
      description: 'Enter an ongoing session.',
      bgColor: 'emerald',
      icon: (
        <svg className="quick-actions__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'View Summaries',
      description: 'Access past session notes.',
      bgColor: 'amber',
      icon: (
        <svg className="quick-actions__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'My Groups',
      description: 'Manage your study groups.',
      bgColor: 'sky',
      icon: (
        <svg className="quick-actions__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-.74-1.657M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.28-1.25.74-1.657M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      )
    }
  ];

  return (
    <section className="quick-actions">
      <h2 className="quick-actions__title">Quick Actions</h2>
      <div className="quick-actions__grid">
        {actions.map((action) => (
          <a key={action.id} href="#" className="quick-actions__card" data-color={action.bgColor}>
            <div className={`quick-actions__icon-wrapper quick-actions__icon-wrapper--${action.bgColor}`}>
              {action.icon}
            </div>
            <div className="quick-actions__content">
              <h3 className="quick-actions__card-title">{action.title}</h3>
              <p className="quick-actions__card-description">{action.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
