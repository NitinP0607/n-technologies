import React from "react";
import "./DigitalMarketingReadmore.css"

const DigitalMarketing = () => {
  return (
    <div className="digital-marketing-wrapper">
      <div className="header-section">
        <h1>Digital Marketing</h1>
        <p>
          At N-Technologies, our digital marketing team helps your business grow online
          through targeted strategies, powerful campaigns, and data-driven decisions. We
          drive traffic, engagement, and conversions using modern marketing tools.
        </p>
      </div>

      <div className="services-offered">
        <h2>What We Offer</h2>
        <ul>
          <li>Search Engine Optimization (SEO)</li>
          <li>Social Media Marketing (SMM)</li>
          <li>Google & Meta Ads (PPC)</li>
          <li>Content Creation & Strategy</li>
          <li>Email Marketing & Automation</li>
        </ul>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Our Marketing Team?</h2>
        <ul>
          <li>Customized campaigns for your business goals</li>
          <li>Performance tracking with detailed analytics</li>
          <li>Affordable and scalable solutions</li>
          <li>Certified experts with proven success</li>
          <li>Focus on ROI and long-term growth</li>
        </ul>
      </div>

      <div className="cta-section">
        <h3>Ready to grow your brand online?</h3>
        <p>Contact us to start your digital marketing journey today!</p>
      </div>
    </div>
  );
};

export default DigitalMarketing;
