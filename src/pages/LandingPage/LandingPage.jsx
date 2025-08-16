import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <nav className="nav">
          <div className="nav__brand">
            <svg className="nav__logo" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" fill="currentColor"></path>
            </svg>
            <h2 className="nav__title">StudyHub</h2>
          </div>
          
          <div className="nav__links">
            <a className="nav__link" href="#">Features</a>
            <a className="nav__link" href="#">Testimonials</a>
            <a className="nav__link" href="#">Pricing</a>
          </div>
          
          <div className="nav__actions">
            <a className="nav__login" href="#">Log In</a>
            <button className="btn btn--primary">
              Sign Up
            </button>
          </div>
        </nav>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Study Smarter, Together</h1>
            <p className="hero__description">
              Unlock your full potential. Join a vibrant community for collaborative study sessions, AI-powered summaries, and endless resources.
            </p>
            <div className="hero__actions">
              <button className="btn btn--primary btn--large">
                Get Started for Free
              </button>
              <button className="btn btn--secondary btn--large">
                How it Works
              </button>
            </div>
          </div>
        </section>

        <section className="features" id="features">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Everything You Need to Succeed</h2>
              <p className="section-header__description">Our platform is packed with features to boost your productivity.</p>
            </div>
            
            <div className="features__grid">
              <div className="feature-card">
                <h3 className="feature-card__title">Group Study Sessions</h3>
                <p className="feature-card__description">Collaborate in real-time with peers. Share notes, tackle problems, and stay motivated in virtual study rooms.</p>
              </div>
              <div className="feature-card">
                <h3 className="feature-card__title">AI-Powered Summaries</h3>
                <p className="feature-card__description">Instantly condense long articles and documents into key points with our smart AI summarizer. Study smarter, not harder.</p>
              </div>
              <div className="feature-card">
                <h3 className="feature-card__title">Resource Sharing</h3>
                <p className="feature-card__description">Access a vast library of notes, practice exams, and guides shared by the community. Find what you need, when you need it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="container">
            <div className="section-header">
              <h2 className="section-header__title">Loved by Students Everywhere</h2>
            </div>
            
            <div className="testimonials__grid">
              <div className="testimonial-card">
                <p className="testimonial-card__text">
                  "StudyHub has transformed my study habits. The group sessions keep me accountable, and the AI summaries are a lifesaver during exam season!"
                </p>
                <div className="testimonial-card__author">
                  <img 
                    alt="Student photo" 
                    className="testimonial-card__avatar" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAItMbpqM4VOOZWeBTyuinnekvhFXlaH0p9EwjD9fSy2szUWFzfXdgrNl2mNuz0_lTie2P358OHgOOci5fb2Tsr90AyxqITAjnEAOuIewDKe6BMD_Xq7K4oX-cKUzr990yA9_X-PGTWDN2y73tXj5584XtQQJYBL9yFOa41OKfKc1hv9OUOvyqihVNypG6D7C7WeARzgYc0WCyvxWLd8VSe04hsM8jTpKNLKGgA8_kGzWn_5vovUMbQHGuPelRvnWjJpFxkTmim8r58"
                  />
                  <div>
                    <p className="testimonial-card__name">Sarah L.</p>
                    <p className="testimonial-card__role">University Student</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <p className="testimonial-card__text">
                  "I love the resource sharing feature. It's amazing to have access to a wide range of study materials from different students. It's like having a study group always available."
                </p>
                <div className="testimonial-card__author">
                  <img 
                    alt="Student photo" 
                    className="testimonial-card__avatar" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhRtzdzECq9IJQ4jvIpTo-C5XojmCSHNqPyJMFJjEcfoBvJHwD5OHWRjTTxlZpnDB6NrGzSOtF82nyAGMMgRTVdqpsSel8OOjGYCgv3IPpExIHXBDv38vpWrhdwAx8dFX0iGEGnJ3IMqWBByjwfhaMJh_4V64apA_p-N9WXvbse7vDnPR1OBInXvuhqzLVB0XQACNenbiQJafvJrqtjS98nod7JjOlYCK9QVmvM6BajxyGqPdrzUTegWwNO4aWKjOtiFF8EU3rcgtf"
                  />
                  <div>
                    <p className="testimonial-card__name">Mike P.</p>
                    <p className="testimonial-card__role">College Sophomore</p>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-card">
                <p className="testimonial-card__text">
                  "The platform is so easy to use and the community is incredibly supportive. I've made new friends and improved my grades thanks to StudyHub."
                </p>
                <div className="testimonial-card__author">
                  <img 
                    alt="Student photo" 
                    className="testimonial-card__avatar" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw3OFAv3YTrTJClHDiWdNnW3Kj10aY16N3MA_4UUNbt4Cne6PwHLkgIkkW8_OBAHq0TwmOVhdYw8ys7UcDzJt3K-3KHIRURZ-lU9sL7STwkKorPsJXKIpi1qBPIhCJTTALRJWuydptfyPigL5XxWvtcHt6B-BSsaB0AaaTkgUCLXTWhRaAe9aqQX0cTL42iqJqPfvHQ8HgZm-3kBAKFegk0xYvS1VAuUPVsajO29OsK7fNnLOk4s5ZB86UKnnsmK2F5viXOIJjliah"
                  />
                  <div>
                    <p className="testimonial-card__name">Jessica Y.</p>
                    <p className="testimonial-card__role">High School Senior</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="community">
          <div className="container">
            <div className="community__content">
              <div className="community__image">
                <img 
                  alt="Students studying together illustration" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaE0hgIilSHbd8ZtMCzh5vwqcc2Euuydg6mkmvsF5kHBVyLR5MGi5f4WSlu6fxg9LKesJwQbDyHNMMjaVqdYzvD-5jxgWFFodJj2zgdVdS_nyVS2aTHyrcZEAC_Y_1SRiqdkQkMGTkeKvazfKHzCkJgIYg3g4zcW2SNszf-LwjgoTy7hGIfRvPEOOlKNg7AelGkoyyt6ryHfImS39Ba_AYXTNPuMgrR4jEJFLBbP2UlrJPbL_BCi2Afq7rmKhZuO9OdO64hAMx_voL"
                />
              </div>
              <div className="community__text">
                <h2 className="community__title">Join a Thriving Community</h2>
                <p className="community__description">
                  Don't study alone. Connect with thousands of students, form study groups, and conquer your courses together. Your next study buddy is just a click away.
                </p>
                <button className="btn btn--primary btn--large">
                  Find Your Group
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__links">
              <a className="footer__link" href="#">About Us</a>
              <a className="footer__link" href="#">Contact</a>
              <a className="footer__link" href="#">Privacy Policy</a>
              <a className="footer__link" href="#">Terms of Service</a>
            </div>
            
            <div className="footer__social">
              <a className="footer__social-link" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path>
                </svg>
              </a>
              <a className="footer__social-link" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
              </a>
              <a className="footer__social-link" href="#">
                <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer__bottom">
            <p>&copy; 2024 StudyHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
