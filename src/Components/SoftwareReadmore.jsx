
import React from "react";
import "./SoftwareReadmore.css"

const SoftwareDevelopment = () => {
  return (
    <div className="software-dev-wrapper">
      <div className="header-section">
        <h1>Software Development</h1>
        <p>
          At N-Technologies, our software development team builds powerful, scalable, and
          tailored software solutions for businesses of all sizes. From enterprise-grade systems
          to custom web apps, we turn your business goals into robust digital products.
        </p>
      </div>

      <div className="services-offered">
        <h2>What We Offer</h2>
        <ul>
          <li>Custom Software Solutions</li>
          <li>Enterprise Web Applications</li>
          <li>SaaS Development</li>
          <li>CRM & ERP Systems</li>
          <li>API Integrations & Backend Architecture</li>
        </ul>
      </div>

      <div className="why-choose-us">
        <h2>Why Choose Our Software Team?</h2>
        <ul>
          <li>End-to-end development (frontend + backend)</li>
          <li>Agile methodology for faster delivery</li>
          <li>Cross-platform & scalable systems</li>
          <li>Cloud-ready and secure applications</li>
          <li>Post-launch maintenance & versioning support</li>
        </ul>
      </div>

      <div className="cta-section">
        <h3>Let’s build your next software product!</h3>
        <p>Talk to us about your software needs and we’ll bring your ideas to life.</p>
      </div>
    </div>
  );
};

export default SoftwareDevelopment;
