import React from "react";
import "./Services.css";
import frontend_job from "../assets/frontend.png";
import backend_job from "../assets/backend.avif";
import app_job from "../assets/appdevelopment.jpeg";
import digi_marketing from "../assets/digital marketing.jpeg";
import ui_ux from "../assets/uiux.jpeg";
import softere_development from "../assets/software-development.jpeg";
const Services = () => {
  return (
    <div className="services-main">
      <h1>Our Services</h1>
      <div className="services-section">
        <div className="service">
          <img src={frontend_job} alt="frontend_deelopment" />
          <span className="frontend-service">Frontend Development</span>
          <p>
            We are top frontend team who helps to build your ideas in practical
            way
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={backend_job} alt="frontend_deelopment" />
          <span className="frontend-service">Backend Development</span>
          <p>
            We have the team who have skills and experience in Backend
            developers.
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={app_job} alt="frontend_deelopment" />
          <span className="frontend-service">App Development</span>
          <p>Teams who are expert in App Development</p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={digi_marketing} alt="frontend_deelopment" />
          <span className="frontend-service">Digital Marketing</span>
          <p>Digital Marketing Team helps you to grow your business</p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={ui_ux} alt="frontend_deelopment" />
          <span className="frontend-service">UI/UX Design</span>
          <p>
            UX/UI Design are according to your needs and provide better
            expereince
          </p>
          <button>Read More</button>
        </div>
        <div className="service">
          <img src={softere_development} alt="frontend_deelopment" />
          <span className="frontend-service">Software Development</span>
          <p>Helps you to build your software, which have your ideas</p>
          <button>Read More</button>
        </div>
      </div>
      <hr />
      <div className="form-container">
        <h2>Request a Service</h2>
        <form className="service-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <select required>
            <option value="">Select a Service</option>
            <option value="web">Web Design</option>
            <option value="app">App Development</option>
            <option value="uiux">UI/UX Design</option>
            <option value="seo">SEO Optimization</option>
          </select>
          <textarea placeholder="Tell us about your project..." required />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default Services;
