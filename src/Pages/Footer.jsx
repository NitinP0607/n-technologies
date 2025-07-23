import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import linked from "../assets/linkedin.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook-media.png"

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="body-section">
        <div className="address-section">
          <h2>Address</h2> <hr />
          <p>Kachatipur Kannauj Uttar Pradesh,209723 <br />
          Landmark: Tirwa road Indrgarh Kannauj Uttar Pradesh <br />
          Phone: +91-9026532143
          </p>
        </div>
        <div className="media">
          <div className="media-section">
            <Link to={"https://www.linkedin.com/in/n-technologies123/"}>
              <img src={linked} alt="img not found" />
            </Link>
          </div>
          <div className="media-section">
            <Link to={"https://www.linkedin.com/"}>
              <img src={insta} alt="img not found" />
            </Link>
          </div>
          <div className="media-section">
            <Link to={"https://www.twitter.com/"}>
              <img src={twitter} alt="img not found" />
            </Link>
          </div>
          <div className="media-section">
            <Link to={"https://www.facebook.com/"}>
              <img src={facebook} alt="img not found" />
            </Link>
          </div>
        </div>
      </div>
      <div className="copy-right-section">
        <p>Copyright &copy; 2025 N-Technologies || All Rights are Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
