import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import linked from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook-media.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="body-section">
        <div className="address-section">
          <h2>Address</h2> <hr />
          <p>
            Noida-62 Near Metro station 201301 <br />
            Landmark: Just Behind Fortis Hospital <br />
            Phone: +91-9026532143
          </p>
        </div>
        <div className="media">
          <div className="media-section">
            <a
              href="https://www.linkedin.com/in/n-technologies123"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linked} alt="LinkedIn" />
            </a>
          </div>
          <div className="media-section">
            <a
              href="https://www.instagram.com/codeconductor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" />
            </a>
          </div>
          <div className="media-section">
            <a
              href="https://x.com/nitin_patel61580"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
          </div>
          <div className="media-section">
            <a
              href="https://www.instagram.com/codeconductor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
      <div className="copy-right-section">
        <p>Copyright &copy; 2025 N-Technologies || All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
