import React from "react";
import "./About.css";
import nittu from "../assets/portrait-smiling-handsome-man-eyeglasses_171337-4853.avif"
import prakki from "../assets/hr-manager.webp"
import anku from "../assets/software-development.jpeg"
import ashish from "../assets/digital_akash.jpg"

const About = () => {
  return (
   <div className="about">
     <h1>About us</h1>
    <div className="about-section">
      <h3>
        We have teams who are expert in build your ideas and transform those
        ideas into a real life bussiness
      </h3>
      <div className="teams">
        <div className="team">
          <h3>Nitin Patel</h3>
          <h4>Expertise Web-developer</h4>
          <hr />
          <img
            src={nittu}
            alt=""
          />
        </div>
        <div className="team">
          <h3>Prakriti Singh</h3>
          <h4>Seniur Manager</h4>
          <hr />
          <img src={prakki} alt="" />
        </div>
        <div className="team">
          <h3>Ankit Rajput</h3>
          <h4>Seniur Software Developer</h4>
          <hr />
          <img src={anku} alt="" />
        </div>
        <div className="team">
          <h3>Ashish Diwakar</h3>
          <h4>Expert in Digital Marketing</h4>
          <hr />
          <img src={ashish} alt="" />
        </div>
      </div>
    </div>
   </div>
  );
};

export default About;
