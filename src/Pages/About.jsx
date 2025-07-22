import React from "react";
import "./About.css";
import nittu from "../assets/nittu.jpg"
import prakki from "../assets/prakki.jpg"
import anku from "../assets/anku.jpg"
import sharad from "../assets/sharad.jpg"

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
          <h3>Sharad Rajput</h3>
          <h4>Skilled Backend Development</h4>
          <hr />
          <img src={sharad} alt="" />
        </div>
      </div>
    </div>
   </div>
  );
};

export default About;
