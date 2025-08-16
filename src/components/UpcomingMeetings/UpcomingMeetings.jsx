import React from 'react';
import './UpcomingMeetings.scss';

const UpcomingMeetings = () => {
  return (
    <section className="upcoming-meetings">
      <h2 className="upcoming-meetings__title">Upcoming Meetings</h2>
      <div className="upcoming-meetings__list">
        <div className="upcoming-meetings__card">
          <div 
            className="upcoming-meetings__image"
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7Mw9i6hS9I4ugzNZP_pvpdzZt3XAjgnWRUj_lMPuH9qZFPkmdFFfs4nUqS2T9gAxwYMddAQneJnxC_AKV6ef6OWq9BcDbKICfrCE9REVIJDXduRCWKAeU2tMDGn_Dya0pBLBvdvHp2Q3EWa9OpXWrKPNwlkpJoJv_2UH2gj8aMx16D2Q_eNsvEwyToYYYEuDHWQKiEt1UROiOV16GPefD5VBqSWBPa5jcfAUgGnidHR00UnJCX_Gl3w36TcubOKowIX9MOsvMSK75")'
            }}
          ></div>
          <div className="upcoming-meetings__content">
            <p className="upcoming-meetings__time">Tomorrow, 2:00 PM</p>
            <h3 className="upcoming-meetings__meeting-title">Math 101 Study Session</h3>
            <p className="upcoming-meetings__group">Group: Calculus Crew</p>
            <button className="upcoming-meetings__join-btn">Join</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingMeetings;
