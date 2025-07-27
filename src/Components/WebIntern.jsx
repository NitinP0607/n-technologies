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

 const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("portfolio", formData.portfolio);
    data.append("reason", formData.reason);
    data.append("resume", formData.resume);

    try {
      const response = await fetch("https://n-technologies-backend.onrender.com/api/web-intern", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          portfolio: "",
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
    }
  };

  return (
    <div className="frontend-form-wrapper">
      <h2>🎨 Frontend Developer Internship</h2>
      <p className="quote">
        "Design is not just what it looks like and feels like. Design is how it works." – Steve Jobs
      </p>
      <p>
        We are hiring creative frontend developers for an internship role. Work with React.js, HTML, CSS, and modern UI/UX practices to build user-centric web applications.
      </p> <br />
      <h3>👨‍💻 Requirements: </h3>
      <div className="frontend-requirements">
        
        <ul>
          <li>Knowlwdge of React.js, HTML, CSS, and UI/UX practices.</li>
          <li>Good problem-solving skills.</li>
          <li>Good communication skills.</li>
          <li>Ability to work in a team.</li>
          <li>Ability to adapt to new technologies.</li>
          <li>Passionate about frontend development.</li>
        </ul>
      </div>
      <button className="toggle-btn" onClick={() => setApply(!apply)}>
        {apply ? "Close Form" : "Apply Now"}
      </button>

      {apply && (
        <div className="frontend-internship-form">
          <h4>Internship Application Form</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
             <input type="text" name="project" placeholder="Enter the link of major project" onChange={handleChange} required />
            <input type="text" name="portfolio" placeholder="Portfolio or GitHub" onChange={handleChange} required />
            <textarea
              placeholder="Why do you want this internship?" name="reason" onChange={handleChange}
              required
            ></textarea>
            <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} required />
            <button type="submit">Submit Application</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WebIntern;
