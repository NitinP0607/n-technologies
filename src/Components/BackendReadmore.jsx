// src/pages/BackendDevelopment.jsx
import React from "react";
import "./BackendReadmore.css";

const BackendDevelopment = () => {
  return (
    <div className="backend-dev-wrapper">
      <div className="header-section">
        <h1>Backend Development</h1>
        <p>
          Our backend team at N-Technologies specializes in building robust, scalable, and secure server-side applications. 
          We ensure your product performs efficiently under all circumstances with powerful APIs and optimized databases.
        </p>
      </div>

      <div className="tech-stack">
        <h2>Technologies We Use</h2>
        <ul>
          <li>Node.js & Express.js</li>
          <li>MongoDB, MySQL</li>
          <li>RESTful APIs & GraphQL</li>
          <li>JWT & OAuth for Authentication</li>
          <li>Cloud Deployment (Render, Vercel, AWS)</li>
        </ul>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Our Backend Team?</h2>
        <ul>
          <li>Clean and scalable code structure</li>
          <li>Strong focus on performance and security</li>
          <li>Custom APIs tailored to business needs</li>
          <li>Integration with third-party tools and services</li>
          <li>Real-time features with Socket.IO / WebSockets</li>
        </ul>
      </div>

      <div className="cta-section">
        <h3>Power your project with a strong foundation!</h3>
        <p>Get in touch today to discuss your backend development needs.</p>
      </div>
    </div>
  );
};

export default BackendDevelopment;
