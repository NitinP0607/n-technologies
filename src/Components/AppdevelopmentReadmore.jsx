import React from "react";
import "./AppdevelopementReadmore.css"

const AppDevelopment = () => {
  return (
    <div className="app-dev-wrapper">
      <div className="header-section">
        <h1>App Development</h1>
        <p>
          At N-Technologies, our App Development team creates high-performance,
          user-friendly mobile apps tailored to your business needs. From idea to launch,
          we ensure a seamless development process and deliver feature-rich applications.
        </p>
      </div>

      <div className="tech-stack">
        <h2>Technologies We Use</h2>
        <ul>
          <li>React Native & Flutter (Cross-platform)</li>
          <li>Kotlin & Swift (Native Android/iOS)</li>
          <li>Firebase, MongoDB, MySQL for backend</li>
          <li>Push Notifications, Camera & GPS Integrations</li>
          <li>API Integrations & Payment Gateways</li>
        </ul>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Our App Team?</h2>
        <ul>
          <li>Custom-designed UI/UX with mobile-first approach</li>
          <li>Cross-platform development for cost-efficiency</li>
          <li>Robust security and performance</li>
          <li>App Store & Play Store deployment assistance</li>
          <li>Ongoing support & maintenance after launch</li>
        </ul>
      </div>

      <div className="cta-section">
        <h3>Launch your app idea with our expert developers!</h3>
        <p>Contact us now to begin building your mobile application.</p>
      </div>
    </div>
  );
};

export default AppDevelopment;
