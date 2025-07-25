import React, { useState } from "react";
import "./BackendIntern.css";

const BackendIntern = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    github: "",
    reason: "",
    language: "",
    resume: null,
  });

   const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    // Here you'd typically send `formData` to backend via API
    alert("Application submitted!");
      setFormData({
      fullName: "",
      email: "",
      github: "",
      reason: "",
      language: "",
      resume: null,
    });
    setShowForm(false);
  };

  return (
    <div className="backend-form-wrapper">
      <h2>🚀 Backend Developer Internship</h2>
      <blockquote className="quote">
        "Great backend developers don’t just build code — they build trust, speed, and scalability."
      </blockquote>
      <blockquote className="quote">
        "Every great app runs on an invisible engine — be the developer behind it."
      </blockquote>
      <blockquote className="quote">
        "Internships don’t build resumes — they build **you**."
      </blockquote>

      <p>
        Work with technologies like Node.js, Express, MongoDB, REST APIs, and
        more. Apply now for real-world backend development experience!
      </p>

      <button className="toggle-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close Form" : "Apply Now"}
      </button>

      {showForm && (
        <form className="internship-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
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
            name="github"
            placeholder="GitHub Profile Link"
            value={formData.github}
            onChange={handleChange}
            required
          />

          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            required
          >
            <option value="">Select Backend Language</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
            <option value="PHP">PHP</option>
            <option value="Java">Java</option>
            <option value="Go">Go</option>
            <option value="Other">Other</option>
          </select>

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
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Application</button>
        </form>
      )}
    </div>
  );
};

export default BackendIntern;
