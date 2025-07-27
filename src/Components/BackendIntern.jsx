import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./BackendIntern.css";

const BackendIntern = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    github: "",
    linkedin: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("github", formData.github);
    data.append("linkedin", formData.linkedin);
    data.append("reason", formData.reason);
    data.append("language", formData.language);
    data.append("resume", formData.resume);

    try {
      const response = await fetch(
        "https://n-technologies-backend.onrender.com/api/backend-intern",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          github: "",
          linkedin: "",
          reason: "",
          language: "",
          resume: null,
        });
        setShowForm(false);
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="backend-form-wrapper">
      <h2>🚀 Backend Developer Internship</h2>
      <blockquote className="quote">
        "Great backend developers don’t just build code — they build trust,
        speed, and scalability."
      </blockquote>
      <blockquote className="quote">
        "Every great app runs on an invisible engine — be the developer behind
        it."
      </blockquote>
      <blockquote className="quote">
        "Internships don’t build resumes — they build **you**."
      </blockquote>

      <p>
        Work with technologies like Node.js, Express, MongoDB, REST APIs, and
        more. Apply now for real-world backend development experience!
      </p>
      <h3>👨‍💻 Requirements</h3>
      <div className="backend-requirements">
        <ul>
          <li>Proficient in JavaScript (Node.js), Java , Python or PHP.</li>
          <li>Good problem-solving skills.</li>
          <li>Familiar with API development and Inegration</li>
          <li>Ability to work as a individually as well as in a team.</li>
          <li>Familiar with GitHub,vercel or render.</li>
          <li>Passionate about backend development.</li>
        </ul>
      </div>

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
          <input
            type="text"
            name="linkedin"
            placeholder="Enter your LinkedIn Profile Link"
            value={formData.linkedin}
            onChange={handleChange}
            required
          />
          <textarea
            name="reason"
            placeholder="Enter your linked-in Profile and why you want to join our team"
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
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSdfmP1oLrfG46zwe7r3tF5r9z2l_Izr6qhw421EJ0EdMdSBXw/viewform">
            click here if form is not working.
          </Link>
        </form>
      )}
    </div>
  );
};

export default BackendIntern;
