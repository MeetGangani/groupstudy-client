import React from 'react';
import './DashboardContent.scss';

const DashboardContent = () => {
  const quickActions = [
    {
      id: 1,
      title: 'Start a Meeting',
      description: 'Initiate a new study session.',
      icon: (
        <svg className="dashboard-content__action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      colorClass: 'indigo'
    },
    {
      id: 2,
      title: 'Join a Meeting',
      description: 'Enter an ongoing session.',
      icon: (
        <svg className="dashboard-content__action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      colorClass: 'emerald'
    },
    {
      id: 3,
      title: 'View Summaries',
      description: 'Access past session notes.',
      icon: (
        <svg className="dashboard-content__action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      colorClass: 'amber'
    },
    {
      id: 4,
      title: 'My Groups',
      description: 'Manage your study groups.',
      icon: (
        <svg className="dashboard-content__action-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.28-1.25-.74-1.657M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.28-1.25.74-1.657M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 0c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      ),
      colorClass: 'sky'
    }
  ];

  return (
    <main className="dashboard-content">
      <div className="dashboard-content__container">
        {/* Hero Section */}
        <div className="dashboard-content__hero">
          <div className="dashboard-content__hero-bg"></div>
          <div className="dashboard-content__hero-content">
            <div className="dashboard-content__hero-text">
              <h1 className="dashboard-content__hero-title">Welcome back, Sarah!</h1>
              <p className="dashboard-content__hero-desc">
                Ready to dive into your studies? Explore your groups, join meetings, or review summaries to stay on top of your coursework.
              </p>
              <div className="dashboard-content__hero-cta">
                <a href="#" className="dashboard-content__hero-btn">Get Started</a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="dashboard-content__section">
          <h2 className="dashboard-content__section-title">Quick Actions</h2>
          <div className="dashboard-content__actions-grid">
            {quickActions.map((action) => (
              <a 
                key={action.id} 
                href="#" 
                className={`dashboard-content__action-card dashboard-content__action-card--${action.colorClass}`}
              >
                <div className={`dashboard-content__action-icon-wrapper dashboard-content__action-icon-wrapper--${action.colorClass}`}>
                  {action.icon}
                </div>
                <div className="dashboard-content__action-content">
                  <h3 className="dashboard-content__action-title">{action.title}</h3>
                  <p className="dashboard-content__action-desc">{action.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Meetings and Summaries Grid */}
        <div className="dashboard-content__grid">
          {/* Upcoming Meetings */}
          <section className="dashboard-content__section">
            <h2 className="dashboard-content__section-title">Upcoming Meetings</h2>
            <div className="dashboard-content__card-list">
              <div className="dashboard-content__card">
                <div 
                  className="dashboard-content__card-image"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7Mw9i6hS9I4ugzNZP_pvpdzZt3XAjgnWRUj_lMPuH9qZFPkmdFFfs4nUqS2T9gAxwYMddAQneJnxC_AKV6ef6OWq9BcDbKICfrCE9REVIJDXduRCWKAeU2tMDGn_Dya0pBLBvdvHp2Q3EWa9OpXWrKPNwlkpJoJv_2UH2gj8aMx16D2Q_eNsvEwyToYYYEuDHWQKiEt1UROiOV16GPefD5VBqSWBPa5jcfAUgGnidHR00UnJCX_Gl3w36TcubOKowIX9MOsvMSK75")'
                  }}
                ></div>
                <div className="dashboard-content__card-content">
                  <p className="dashboard-content__card-meta dashboard-content__card-meta--green">Tomorrow, 2:00 PM</p>
                  <h3 className="dashboard-content__card-title">Math 101 Study Session</h3>
                  <p className="dashboard-content__card-subtitle">Group: Calculus Crew</p>
                  <button className="dashboard-content__card-btn dashboard-content__card-btn--green">Join</button>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Summaries */}
          <section className="dashboard-content__section">
            <h2 className="dashboard-content__section-title">Recent Summaries</h2>
            <div className="dashboard-content__card-list">
              <div className="dashboard-content__card">
                <div 
                  className="dashboard-content__card-image"
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyyVVDQW8n1dY_4Ui25rKwPgoe3D3Ab3RS2pT66rbPoyAGmliAXBrFlN7pH-VbMSp6WcmH_C3PwDAZpJ5sJ_KGm9mmAwl53jvCZIapGd80hE74_um5H5c9lFAeVc8tuZA51jgofmSWKECNwDWrdKh4X4lQLsU-Y73oj6Bz0W0UeSq4Jh3hM3eJltkrYkncAr9XWOsJFMeJQgKckwt_AQ-r-2aOaft9DxPb1BZCQMK1t7mkGXdcv8J1jSlModPM0__G5H6ixFr2iiiq")'
                  }}
                ></div>
                <div className="dashboard-content__card-content">
                  <p className="dashboard-content__card-meta dashboard-content__card-meta--amber">Last Updated: 2 days ago</p>
                  <h3 className="dashboard-content__card-title">Physics 202 - Chapter 3 Summary</h3>
                  <p className="dashboard-content__card-subtitle">Group: Physics Phantoms</p>
                  <button className="dashboard-content__card-btn dashboard-content__card-btn--amber">View</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;
