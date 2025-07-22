import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import linked from "../assets/linkedin.png";
import insta from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="body-section">
        <div className="address-section">
          <h2>Address</h2> <hr />
          <p>Kachatipur Kannauj Uttar Pradesh,209723</p>
        </div>
        <div className="media">
          <div className="media-section">
            <h2>LinkedIn</h2>
            <Link to={"https://www.linkedin.com/in/n-technologies123/"}>
              <img src={linked} alt="img not found" />
            </Link>
          </div>
          <hr />
          <div className="media-section">
            <h2>Instagram</h2>
            <Link to={"https://www.linkedin.com/"}>
              <img src={insta} alt="img not found" />
            </Link>
          </div>
          <hr />
        </div>
      </div>
      <div className="copy-right-section">
        <p>Copyright &copy; 2025 N-Technologies || All Rights are Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
