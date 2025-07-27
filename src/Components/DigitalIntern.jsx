import React, { useState, useRef } from "react";
import "./DigitalMarketingIntern.css";

const DigitalMarketingIntern = () => {
  const [apply, setApply] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    reason: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`${name}: ${value}`); // Debug
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("linkedin", formData.linkedin);
    data.append("reason", formData.reason);
    data.append("resume", formData.resume);

    try {
      const response = await fetch(
        "https://n-technologies-backend.onrender.com/api/digital-marketing-intern",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        alert("Form Submitted Successfully!");
        setFormData({
          name: "",
          email: "",
          linkedin: "",
          reason: "",
          resume: null,
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }
        setApply(false);
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong!");
    }
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
     <h3>👨‍💻 Requirements</h3>
      <div className="digital-requirements">
        
        <ul>
          <li>
            Understanding of SEO, SEM, and social media marketing strategies.
          </li>
          <li>Creative thinking and content creation skills.</li>
          <li>
            Basic knowledge of Google Analytics and digital marketing tools.
          </li>
          <li>Ability to work independently as well as in a team.</li>
          <li>
            Familiarity with platforms like Facebook Ads, Google Ads, or
            LinkedIn Marketing.
          </li>
          <li>Passionate about digital marketing and brand growth.</li>
        </ul>
      </div>

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
              ref={fileInputRef}
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
