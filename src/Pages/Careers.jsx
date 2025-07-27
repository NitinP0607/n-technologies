import React from "react";
import "./Careers.css";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="careers-container">
      <div className="careers-header">
        <h1>Join N-Technologies</h1>
        <p>
          Build your future with us. We’re looking for passionate talent to grow
          with our company.
        </p>
      </div>

      <section className="careers-section">
        <h2>🔹 Internships</h2>
        <div className="careers">
          <div className="career-card">
            <h3>Web Development Intern</h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Duration:</strong> 3 months
            </p>
            <p>
              <strong>Stipend:</strong> ₹1000 + Certificate
            </p>
            <p>
              <strong>Skills Required:</strong> HTML, CSS, JavaScript, React
            </p>
            <Link to={"/careers/web-internship"} className="apply-btn">
              Apply Now
            </Link>
          </div>
          <div className="career-card">
            <h3>Backend Developer</h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Duration:</strong> 3 months
            </p>
            <p>
              <strong>Stipend:</strong> ₹1000 + Certificate
            </p>
            <p>
              <strong>Skills Required:</strong> Java, Python, C/C++, SQL/MONGO
              DB
            </p>
            <Link to={"/careers/backend-internship"} className="apply-btn">
              Apply Now
            </Link>
          </div>

          <div className="career-card">
            <h3>Digital Marketing Intern</h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Duration:</strong> 3 month
            </p>
            <p>
              <strong>Stipend:</strong> ₹1000 Certificate Only
            </p>
            <p>
              <strong>Skills Required:</strong> Canva, SEO, Instagram, LinkedIn
            </p>
            <Link to={"/careers/digital-marketing-internship"} className="apply-btn">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <section className="careers-section">
        <h2>🔹 Job Openings</h2>
        <div className="careers">
          <div className="career-card">
            <h3>Frontend Developer (React)</h3>
            <p>
              <strong>Location:</strong> Hybrid - Kanpur / Remote
            </p>
            <p>
              <strong>Experience:</strong> 4–6 Years
            </p>
            <p>
              <strong>CTC:</strong> ₹3 - ₹4.5 LPA
            </p>
            <p>
              <strong>Requirements:</strong> ReactJS, Tailwind, Git, APIs
            </p>
            <Link to={"/careers/dev-mode"} className="apply-btn">
              Apply Now
            </Link>
          </div>

          <div className="career-card">
            <h3>Backend Developer (Node.js)</h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Experience:</strong> 4–6 Years
            </p>
            <p>
              <strong>CTC:</strong> ₹4 - ₹6 LPA
            </p>
            <p>
              <strong>Requirements:</strong> Node.js, MongoDB, Express, REST
              APIs
            </p>
            <Link to={"/careers/dev-mode"} className="apply-btn">
              Apply Now
            </Link>
          </div>
          <div className="career-card">
            <h3>Software Developer </h3>
            <p>
              <strong>Location:</strong> Remote
            </p>
            <p>
              <strong>Experience:</strong> 4–6 Years
            </p>
            <p>
              <strong>CTC:</strong> ₹4 - ₹6 LPA
            </p>
            <p>
              <strong>Requirements:</strong> Software Development, Git, APIs
            </p>
            <Link to={"/careers/dev-mode"} className="apply-btn">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
