import React from "react";
import { useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import frontend_job from "../assets/frontend.png";
import backend_job from "../assets/backend.avif";
import app_job from "../assets/appdevelopment.jpeg";
import digi_marketing from "../assets/digital marketing.jpeg";
import ui_ux from "../assets/uiux.jpeg";
import softere_development from "../assets/software-development.jpeg";

const Services = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://n-technologies-backend.onrender.com/api/send-service-request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        alert("Request sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Failed to send. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong.", error);
    }
  };

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
          <Link to={"/services/frontend-read-more"}>Read More</Link>
        </div>
        <div className="service">
          <img src={backend_job} alt="frontend_deelopment" />
          <span className="frontend-service">Backend Development</span>
          <p>
            We have the team who have skills and experience in Backend
            developers.
          </p>
          <Link to={"/services/backend-read-more"}>Read More</Link>
        </div>
        <div className="service">
          <img src={app_job} alt="frontend_deelopment" />
          <span className="frontend-service">App Development</span>
          <p>Teams who are expert in App Development</p>
          <Link to={"/services/appdevelopment-read-more"}>Read More</Link>
        </div>
        <div className="service">
          <img src={digi_marketing} alt="frontend_deelopment" />
          <span className="frontend-service">Digital Marketing</span>
          <p>Digital Marketing Team helps you to grow your business</p>
          <Link to={"/services/digital-marketing-read-more"}>Read More</Link>
        </div>
        <div className="service">
          <img src={ui_ux} alt="frontend_deelopment" />
          <span className="frontend-service">UI/UX Design</span>
          <p>
            UX/UI Design are according to your needs and provide better
            expereince
          </p>
          <Link to={"/services/ui-ux-read-more"}>Read More</Link>
        </div>
        <div className="service">
          <img src={softere_development} alt="frontend_deelopment" />
          <span className="frontend-service">Software Development</span>
          <p>Helps you to build your software, which have your ideas</p>
          <Link to={"/services/software-read-more"}>Read More</Link>
        </div>
      </div>
      <hr />
      <div className="form-container">
        <h2>Request a Service</h2>
        <form className="service-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a Service</option>
            <option value="Frontend Development">Frontend Development</option>
            <option value="Backend Development">Backend Development</option>
            <option value="App Development">App Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Software Development">Software Development</option>
          </select>
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
};

export default Services;
