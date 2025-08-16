import React from 'react';
import './GroupsContent.scss';

const GroupsContent = () => {
  const groups = [
    {
      id: 1,
      name: 'Calculus 101',
      category: 'Math',
      members: 12,
      nextMeeting: 'Tomorrow, 3 PM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-SAh1AKBL6TluEwy5mBrKHNQpJR-DsuNvb0mNCCurR0FNjMJt9ISRfNXHb5KUXz59y0qmhPoyuNgnJqGlPhli5hWikoSQo_PdIzmAo-KADL_YRL_fn3D22ZffOvBXkBUq3NQI3sg1VdBRPw2nUiu_NJa2dG19bw9dw6QJyNC5AkTPze1cfpg6fBi_YBCdtFRHBEtrXLSOvoe40xm4241E-R7dXIUC50H0GqL4EAm2ZgxNpzsf8uZD8HgTGPP1W8oyMB6h2-OfWxvn'
    },
    {
      id: 2,
      name: 'Organic Chemistry',
      category: 'Science',
      members: 8,
      nextMeeting: 'Friday, 10 AM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzag5LprXHlpONh_GrMKBVUIHHDOIVL7dx7d5Roy0S-i5_M6d-DWsm1UCKS8VmoqUIeWBojTX7zfWpnaK-95EA0Y2zpilF2rlt1kJHpIwzM27z3EGGX8VBk6MU54cDQFhqe7jnLHFZQKiJmCpd8-ClKyiXvS0K-58s2x9d-kea3On_OdTc0fmWrTc6FKjrmybKQYn6E3T4HjlQzs_97ND6zrVekUtMCbfRtB_c2wYFZQYDFUj4gu9SVei-9WaqK075AQH2dbxUdezM'
    },
    {
      id: 3,
      name: 'Linear Algebra',
      category: 'Math',
      members: 15,
      nextMeeting: 'Monday, 1 PM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgQjnkZuJCQsQw1CPHiUvCTFwh20XWjDV4UXeDR9FQUK5PKWGEHyHxsq0Z-fjeRlJWTpxLTEYXNpoOElrCO20YPkMhNIXtB3ldhM9dFJj5qX8IAGVSrALqoHW1EDe2NmoWaXmQ5HTTfp6R8g942CIIsH8lkEE_sBvGcbT9T_rAb9wCKWmb5Ba_e8xZ1CKg-bdRLiNdaloostNVpHzQvKuDwVxpxAuxqNzfJFm33E0pLu0RgbX6E_6OP1gCjyQc9KxTHbDl_4XgZtlW'
    },
    {
      id: 4,
      name: 'Physics for Engineers',
      category: 'Science',
      members: 20,
      nextMeeting: 'Wednesday, 4 PM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAH3WoC954J76Mimt1qXcxmaNAQq0x1arpFeTXEpnO5q85BJ34PofEm3wPpeG6OawR9dLncYHq7oVOHFY_K-9yDfB6Vi45LuhGabyAq5-FtzwVmWlRrcxZFv78QNXapvOQJjPSMU5zTbQuxIuqem-vS2Ff4u7v9utFG49scagiu3r0jj8ptW1NeIeJWVBvCXPiRnAmRAi6SI07ifVPuS2STe86H2cTBCFfRARXMj1i7Uhr21w98cip6SdlQeyBcIC3CbDjUWLf17QzN'
    },
    {
      id: 5,
      name: 'Data Structures',
      category: 'Computer Science',
      members: 18,
      nextMeeting: 'Thursday, 11 AM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb28xiLEZ1CZOdQoDM_ULG20hPyOik_LIwf8Hy277fSOt_5NqcNu4N9MoKxwy8Qw3IwnNaaoRm9wgEv9aR9NE27kDJnUc_OG6732MF774eDq1cRGql7mg2-2K3wsYPbfCMRiYz-gynqq_lHNcwl_kIfVnDSInxPtmaaLxRbJozRhdIpA9RpKKsTKL0DbKERy-qIbPDV6kvHL8pcmA-tNPDH9nBpqSrSruxMLlLda3iZbn_Ohf7dUxgK7owIGx4fZj8Hh_r1cZqEhuu'
    },
    {
      id: 6,
      name: 'Discrete Math',
      category: 'Math',
      members: 22,
      nextMeeting: 'Tuesday, 9 AM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7UsVKz9XW-cu9C4qupFY4Vn3sPM8UrBGO0l6i6VAL5o5RzvRBX1k_jSkJ9aGmtJBOjety1DK9_8JBpxjb7Lu52ce5pykAtndj5kDJhAtUP59bLW-1XoIhsqNaHN-Dos2SywiBm3by9L7qP-0ri-A2HHwvfUZr-pxIMULAuvBH0vfSP2PimVB7mPcGkg1X7PHZ3NAhy5z0XqwBP20bq3phfjCuEqXJ2C4wdycGWmktALuDWidID0qtyaw5ubE4t5lpFDXV9ahKtJQU'
    }
  ];

  return (
    <main className="groups-content">
      <div className="groups-content__container">
        {/* Header Section */}
        <div className="groups-content__header">
          <h1 className="groups-content__title">Groups</h1>
          <div className="groups-content__actions">
            <button className="groups-content__btn groups-content__btn--secondary">
              Join Group
            </button>
            <button className="groups-content__btn groups-content__btn--primary">
              <span className="material-icons groups-content__btn-icon">add</span>
              Create Group
            </button>
          </div>
        </div>

        {/* Groups Section */}
        <div className="groups-content__section">
          <h2 className="groups-content__section-title">My Groups</h2>
          <div className="groups-content__grid">
            {groups.map((group) => (
              <div key={group.id} className="groups-content__card">
                <img 
                  src={group.image} 
                  alt={group.name}
                  className="groups-content__card-image"
                />
                <div className="groups-content__card-content">
                  <h3 className="groups-content__card-title">{group.name}</h3>
                  <p className="groups-content__card-category">{group.category}</p>
                  <div className="groups-content__card-info">
                    <div className="groups-content__card-meta">
                      <span className="material-icons groups-content__card-icon">group</span>
                      {group.members} Members
                    </div>
                    <div className="groups-content__card-meta">
                      <span className="material-icons groups-content__card-icon">event</span>
                      Next: {group.nextMeeting}
                    </div>
                  </div>
                </div>
                <div className="groups-content__card-footer">
                  <a href="#" className="groups-content__card-link">View Group</a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="groups-content__pagination">
            <nav className="groups-content__pagination-nav">
              <a href="#" className="groups-content__pagination-btn groups-content__pagination-btn--prev">
                <span className="sr-only">Previous</span>
                <span className="material-icons">chevron_left</span>
              </a>
              <a 
                href="#" 
                className="groups-content__pagination-btn groups-content__pagination-btn--active"
                aria-current="page"
              >
                1
              </a>
              <a href="#" className="groups-content__pagination-btn">2</a>
              <a href="#" className="groups-content__pagination-btn groups-content__pagination-btn--hidden">3</a>
              <a href="#" className="groups-content__pagination-btn groups-content__pagination-btn--next">
                <span className="sr-only">Next</span>
                <span className="material-icons">chevron_right</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </main>
  );
};

export default GroupsContent;
