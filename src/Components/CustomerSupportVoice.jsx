import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WebIntern.css";

const CustomerSupport = () => {
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
        "https://n-technologies-backend.onrender.com/api/customer-support-voice",
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
      <h2>📞 Customer Support Executive – Voice Process</h2>
      <p className="quote">
        "Kind words can be short and easy to speak, but their echoes are truly endless."
      </p>
      <p>
        Join our customer support team and help clients over voice calls with
        professionalism and empathy. Handle queries, resolve issues, and build
        positive customer relationships.
      </p>{" "}
      <br />
      <h3>🧾 Requirements: </h3>
      <div className="frontend-requirements">
        <ul>
          <li>Excellent verbal communication in Hindi and English.</li>
          <li>Basic computer and email handling skills.</li>
          <li>Patience and calm attitude during customer interaction.</li>
          <li>Ability to resolve queries over phone calls effectively.</li>
          <li>Must be available for in-office work (Noida location).</li>
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
              placeholder="Why do you want to join as a Customer Support Executive?"
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
          </form>
        </div>
      )}
    </div>
  );
};

export default CustomerSupport;
