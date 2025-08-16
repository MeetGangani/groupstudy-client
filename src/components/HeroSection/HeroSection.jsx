import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div 
        className="hero-section__background"
        style={{
          backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuACdSyRpa7WzxRzdu0M2QPDn_hVqgEyxSYrLN-o-RpIUPVF8lu3MenUmVnRckQqqlaAo3zBrJhVLPT8ib2I7s3lRwgR0O1gs_ge6sWyAt_tmS6tmADgX_hEwxsA-uJwgo6AMcWabX9TkbFaiL9n3p9o9Bl3G56JqjZ22yIR8Mz1eJ0nACtQPhag9tj5ozr9_tH5vxYdNTf8eugUCywSRxPW67o8iisRUkdIsHci5OIgRFJGbB56eWnTSCIMh3W4j9573UV63_ufMluy")'
        }}
      ></div>
      <div className="hero-section__overlay">
        <div className="hero-section__content">
          <h1 className="hero-section__title">Welcome back, Sarah!</h1>
          <p className="hero-section__description">
            Ready to dive into your studies? Explore your groups, join meetings, or review summaries to stay on top of your coursework.
          </p>
          <div className="hero-section__action">
            <a href="#" className="hero-section__button">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
