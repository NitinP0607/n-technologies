import React, { useState } from "react";
import "./DigitalMarketingIntern.css";

const DigitalMarketingIntern = () => {
  const [apply, setApply] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Digital Marketing Internship Form Submitted:");
    console.log("Name:", formData.name);
    console.log("Email:", formData.email);
    console.log("LinkedIn:", formData.linkedin);
    console.log("Reason:", formData.reason);
    console.log("Resume File:", formData.resume);
    alert("Form data logged in console!");

    // Optional reset
    setFormData({
      name: "",
      email: "",
      linkedin: "",
      reason: "",
      resume: null,
    });
    setApply(false);
  };

  return (
    <div className="digital-form-wrapper">
      <h2>📈 Digital Marketing Internship</h2>
      <p className="quote">
        "Marketing is no longer about the stuff that you make, but about the
        stories you tell." – Seth Godin
      </p>
      <p>
        We are looking for enthusiastic digital marketers to join our team as
        interns. Work on real campaigns using SEO, social media, and content
        strategies to grow online presence.
      </p>

      <button className="toggle-btn" onClick={() => setApply(!apply)}>
        {apply ? "Close Form" : "Apply Now"}
      </button>

      {apply && (
        <div className="digital-internship-form">
          <h4>Internship Application Form</h4>
          <form onSubmit={handleSubmit}>
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
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn Profile"
              value={formData.linkedin}
              onChange={handleChange}
              required
            />
            <textarea
              name="reason"
              placeholder="Why do you want this internship?"
              value={formData.reason}
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
            <button type="submit">Submit Application</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DigitalMarketingIntern;
