import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WebIntern.css";

const CustomerSupportNonVoice = () => {
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
        "https://n-technologies-backend.onrender.com/api/customer-support-non-voice",
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
      <h2>💻 Customer Support Executive – Non-Voice</h2>
      <p className="quote">
        "Great customer service is not just answering, it's understanding."
      </p>
      <p>
        Join our non-voice support team to assist customers through chat and
        email communication. Help resolve queries and provide a great support
        experience without calls.
      </p>
      <br />
      <h3>🧾 Requirements: </h3>
      <div className="frontend-requirements">
        <ul>
          <li>Good written communication in English and Hindi.</li>
          <li>Fast typing skills and accuracy in responses.</li>
          <li>Ability to handle multiple chats/emails simultaneously.</li>
          <li>Basic knowledge of computer operations and MS Office.</li>
          <li>Calm and problem-solving mindset for customer issues.</li>
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
              placeholder="Why do you want to join as a Customer Support Executive – Non-Voice?"
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

export default CustomerSupportNonVoice;
