import React, { useState } from "react";
import "./WebIntern.css";

const WebIntern = () => {
  const [apply, setApply] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
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
    console.log("Form Data Submitted:", formData);
    
    alert("Form Submitted Succesfully!");

    // Optional: Reset form
    setFormData({
      name: "",
      email: "",
      portfolio: "",
      reason: "",
      resume: null,
    });
    setApply(false);
  };

  return (
    <div className="frontend-form-wrapper">
      <h2>🎨 Frontend Developer Internship</h2>
      <p className="quote">
        "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
      </p>
      <p>
        We are hiring creative frontend developers for an internship role. Work with React.js, HTML, CSS, and modern UI/UX practices to build user-centric web applications.
      </p>

      <button className="toggle-btn" onClick={() => setApply(!apply)}>
        {apply ? "Close Form" : "Apply Now"}
      </button>

      {apply && (
        <div className="frontend-internship-form">
          <h4>Internship Application Form</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" placeholder="Portfolio or GitHub" onChange={handleChange} required />
            <textarea
              placeholder="Why do you want this internship?" onChange={handleChange}
              required
            ></textarea>
            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
            <button type="submit">Submit Application</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WebIntern;
