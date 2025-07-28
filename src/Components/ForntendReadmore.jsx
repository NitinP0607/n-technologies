import React from "react";
import "./FrontendReadmore.css"

const FrontendDevelopment = () => {
  return (
    <div className="frontend-dev-wrapper">
        
      <div className="header-section">
        <h1>Frontend Development</h1>
        <p>
          At N-Technologies, our frontend development team is dedicated to crafting
          beautiful, user-friendly, and responsive interfaces. We turn your ideas
          into seamless digital experiences using modern technologies.
        </p>
      </div>

      <div className="tech-stack">
        <h2>Technologies We Use</h2>
        <ul>
          <li>React.js (with Vite for blazing-fast setup)</li>
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Tailwind CSS / Bootstrap for responsive design</li>
          <li>Framer Motion for animations</li>
          <li>Redux / Zustand for state management</li>
        </ul>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Our Frontend Team?</h2>
        <ul>
          <li>Pixel-perfect UI/UX implementation</li>
          <li>SEO-friendly and fast-loading pages</li>
          <li>Mobile-first, fully responsive layouts</li>
          <li>Cross-browser compatibility</li>
          <li>Close collaboration with clients to match vision and functionality</li>
        </ul>
      </div>

      <div className="cta-section">
        <h3>Let’s build something amazing together!</h3>
        <p>Contact us today to discuss your frontend development needs.</p>
      </div>
    </div>
  );
};

export default FrontendDevelopment;
