import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WebIntern.css";

const TechnicalSupport = () => {
  const [apply, setApply] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("reason", formData.reason);
    data.append("resume", formData.resume);

    try {
      const response = await fetch(
        "https://n-technologies-backend.onrender.com/api/technical-support",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          reason: "",
          resume: null,
        });
        setApply(false);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="frontend-form-wrapper">
      {loading && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}
      <h2>🛠️ Technical Support Executive</h2>
      <p className="quote">
        "Technology is best when it brings people together." – Matt Mullenweg
      </p>
      <p>
        We are looking for a dedicated Technical Support Executive to help users
        troubleshoot issues, provide technical guidance, and ensure smooth
        product usage.
      </p>
      <br />
      <h3>🧾 Requirements: </h3>
      <div className="frontend-requirements">
        <ul>
          <li>Basic understanding of software and hardware troubleshooting.</li>
          <li>Good communication and customer handling skills.</li>
          <li>Ability to resolve technical queries through calls or email.</li>
          <li>Knowledge of ticketing systems is a plus.</li>
          <li>Should be available for rotational shifts.</li>
        </ul>
      </div>
      <button className="toggle-btn" onClick={() => setApply(!apply)}>
        {apply ? "Close Form" : "Apply Now"}
      </button>
      {apply && (
        <div className="frontend-internship-form">
          <h4>Job Application Form</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Why do you want to join as a Technical Support Executive?"
              name="reason"
              onChange={handleChange}
              required
            ></textarea>
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit Application"}
            </button>{" "}
            <br />
            <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdfmP1oLrfG46zwe7r3tF5r9z2l_Izr6qhw421EJ0EdMdSBXw/viewform">
              click here if form is not working.
            </Link>
          </form>
        </div>
      )}
    </div>
  );
};

export default TechnicalSupport;
