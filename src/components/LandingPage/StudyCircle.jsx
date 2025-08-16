import React from "react";
import "./StudyCircle.scss";

const StudyCircle = () => {
  return (
    <div className="study-circle-root">
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <svg
              className="logo-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-5.998 12.083 12.083 0 01.665-6.479L12 14z"></path>
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeOpacity=".4"></path>
              <path d="M3.27 10.999A11.953 11.953 0 0012 20.055a11.953 11.953 0 008.73-9.056"></path>
            </svg>
            <h2 className="logo-text">Study Circle</h2>
          </div>

          <nav className="nav">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              About
            </a>
            <a href="#" className="nav-link">
              Discussions
            </a>
            <a href="#" className="nav-link">
              Community
            </a>
          </nav>

          <a href="#" className="btn-primary">
            Join Us
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-gradient"></div>
          <div className="container hero-content">
            <h1 className="hero-title">Unlock Your Potential.</h1>
            <p className="hero-desc">
              Connect with a global community of learners. Dive into engaging
              discussions, share your knowledge, and grow together.
            </p>
            <a href="#" className="btn-cta">
              Start Exploring
            </a>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="section-why-join">
          <div className="container">
            <div className="section-header">
              <h2>Why Join Study Circle?</h2>
              <p>
                We offer a dynamic and supportive environment for intellectual
                exploration and personal growth.
              </p>
            </div>

            <div className="cards">
              <article className="card">
                <div className="icon-wrapper icon-collaborative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.121-1.278-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.121-1.278.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM3 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3>Collaborative Learning</h3>
                <p>
                  Engage in rich discussions and learn from the diverse
                  perspectives of our community members.
                </p>
              </article>

              <article className="card">
                <div className="icon-wrapper icon-expert-led">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3>Expert-Led Sessions</h3>
                <p>
                  Gain insights from industry experts and academic leaders in our
                  exclusive online events.
                </p>
              </article>

              <article className="card">
                <div className="icon-wrapper icon-global-network">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m-9 9a9 9 0 009 9m-9-9h18"></path>
                  </svg>
                </div>
                <h3>Global Network</h3>
                <p>
                  Connect with peers from around the world and build a professional
                  network that lasts a lifetime.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Upcoming Discussions Section */}
        <section className="section-upcoming">
          <div className="container grid-two-columns">
            <div>
              <h2>Upcoming Discussions</h2>
              <p>
                Don't miss out on our upcoming sessions. Reserve your spot today
                and be part of the conversation.
              </p>

              <div className="events-list">
                <article className="event-item">
                  <div className="event-date">
                    <span>JUL</span>
                    <span>15</span>
                  </div>
                  <div>
                    <h3>The Future of Technology</h3>
                    <p>
                      Explore the ethical implications and societal impact of
                      emerging technologies like AI and quantum computing.
                    </p>
                    <a href="#" className="link-learn-more">
                      Learn More →
                    </a>
                  </div>
                </article>

                <article className="event-item">
                  <div className="event-date">
                    <span>JUL</span>
                    <span>22</span>
                  </div>
                  <div>
                    <h3>Exploring Ancient Philosophies</h3>
                    <p>
                      A deep dive into the wisdom of Stoicism, Epicureanism, and their
                      relevance in the modern world.
                    </p>
                    <a href="#" className="link-learn-more">
                      Learn More →
                    </a>
                  </div>
                </article>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGLPZ-xybzELq7ci_wqFGeHcLJzogxQJ1Lr_IBxwfYmJwrMw1Jyo0X-Ujsr1yrLu_sSgnh3bh0Qo3J6t9yAvm0R5AU4wxg7Eg--T_eq-fanAONkzooqfRYb4wnjk5Or-Sj_2XROVtMvEMl0lJSKCKZIoOtG_ZlChgEiII65ssKZ6rMQYAjgoYf_yxcZP5ngc4cFhuFydEjE2xzAhGioSxPidkcoZyOAmw6vrWgs_7s-2hcQZkXmOMH9IvmxoHNGQfEb2HIfkp5_GE"
                alt="People in a discussion"
              />
              <div className="img-overlay"></div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-testimonials">
          <div className="container">
            <div className="section-header">
              <h2>From Our Members</h2>
              <p>
                Hear what our community has to say about their experience with Study
                Circle.
              </p>
            </div>

            <div className="testimonials-grid">
              <article className="testimonial-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd20q8xNzX3_flsoLAHk6Mzn7lyraenA1koCt5ojPebSLKoG_YTDyQ86O9W184J8CSTKVETaw5mYeMCa-39WO6s2jbEZp8TYX_BExUE7r7naK00XmS5MANX_pVxF5h85gSLCHnUyXIxzumqbkmQXewXBQHzKJ_tj-RZ2tJDYEnkuLkSxuHG8_s0-z8BZgAkySfV-WXI3GXLIafTArZgUycWXvX8fIdbm29iRUAeAqHf7OvwR85pkmmWlkblVKzgDnVm98lAWmh2vA"
                  alt="Sarah"
                  className="testimonial-image"
                />
                <p className="testimonial-text">
                  "Study Circle has transformed my learning experience. The discussions are insightful, and the community is incredibly supportive."
                </p>
                <p className="testimonial-author">- Sarah L.</p>
              </article>

              <article className="testimonial-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfG1OKR1RuCypK37mNpK9rOrTaCvgPPsbCHaxo0W3Smyp3hEHe-ZnCdDdmrwfg5Tg4kchzB-2482sM8Ye-G_vFtNUR23iErTl2DX7QTQVBbiOfvaZi9_sJCy99lrOlg3qd4tbd5uJ2Ls5F0W25Zfqcc0SkRFSNu33Wg5kqIdo5pNUv-UMIwB9YMdu8Zf7TC7nCIE-ijlJruyaMhFpQJODo9fRfOKjx-ZZsUg-jd415ez7WNfNN8Hx05Ass8d4Cv4j7Cn5sry_1W9A"
                  alt="David"
                  className="testimonial-image"
                />
                <p className="testimonial-text">
                  "I've met so many interesting people and learned so much through Study Circle. It's a fantastic platform for intellectual growth."
                </p>
                <p className="testimonial-author">- David C.</p>
              </article>

              <article className="testimonial-card">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOTgoph29D_cnY9jcS13zsbZrYCOaOxtz8RakIFzkC10cI0DnMyzYPygLyVeKbCHBjnx3_GLqB_5kPjntOrby8n5Iz2EhijCJyaA_MzDH_kFbc5BpsiP2TdQ9bEfsXvKuQEnj2LnbXU1AMuvJ8_EcF99XohnGIXNGx2GTjdOaZrOAifIl0qofDGQRUQNtkbz3dC1R-1Wvrwr7i10KEc9t2s2Ym9QbJMxlFYJAGfUEk9TiyddqUH2zXwKUhEcJpSosqvJjxuHKLH6o"
                  alt="Emily"
                  className="testimonial-image"
                />
                <p className="testimonial-text">
                  "The variety of topics covered in Study Circle keeps me engaged and constantly learning. I highly recommend it!"
                </p>
                <p className="testimonial-author">- Emily R.</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-container">
          <div className="logo footer-logo">
            <svg
              className="logo-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-5.998 12.083 12.083 0 01.665-6.479L12 14z" />
              <path d="M12 14l9-5-9-5-9 5 9 5z" strokeOpacity=".4" />
            </svg>
            <h2 className="logo-text">Study Circle</h2>
          </div>

          <nav className="nav footer-nav">
            <a href="#" className="nav-link footer-link">
              About
            </a>
            <a href="#" className="nav-link footer-link">
              Contact
            </a>
            <a href="#" className="nav-link footer-link">
              Privacy
            </a>
          </nav>

          <div className="social-icons">
            {/* Example social icons, add SVG or font-icons as needed */}
            <a href="#" className="social-link" aria-label="Twitter">
              <svg
                className="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.48 2.96,10.29 2.38,10.03C2.38,10.05 2.38,10.07 2.38,10.08C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16.03 6.02,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="Instagram">
              <svg
                className="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
              </svg>
            </a>

            <a href="#" className="social-link" aria-label="Facebook">
              <svg
                className="icon"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.32 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </a>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Study Circle. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudyCircle;
