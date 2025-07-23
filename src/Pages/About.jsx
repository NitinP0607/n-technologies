import React from "react";
import "./About.css";
import nittu from "../assets/nittu.jpg";
import prakki from "../assets/prakki.jpg";
import anku from "../assets/anku.jpg";
import sharad from "../assets/sharad.jpg";

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
            <div className="personal-team">
              <p>
                Nitin Patel is the Founder and Senior Web Developer at N-Technologies, a
                digital agency committed to delivering creative and
                high-performing web solutions. With over 5+ years of experience
                in full-stack web development, he leads the team with a blend of
                technical expertise and business vision.
              </p>
              <img src={nittu} alt="" />
            </div>
          </div>
          <div className="team">
            <h3>Prakriti Singh</h3>
            <h4>Senior Manager</h4>
            <hr />
            <div className="personal-team">
              <img src={prakki} alt="" />
              <p>
                As the driving force behind our project execution, Prakriti
                Singh leads the team at N-Technologies with a perfect blend of
                technical expertise, leadership, and client-focused strategy.
                With over 5 years of experience in managing web development,
                UI/UX, and software solutions, they ensure every project runs
                smoothly from idea to launch.
              </p>
            </div>
          </div>
          <div className="team">
            <h3>Ankit Rajput</h3>
            <h4>Senior Software Developer</h4>
            <hr />
            <div className="personal-team">
              <p>
                With deep expertise in both frontend and backend technologies,
                Ankit Rajput brings innovative solutions and clean code to every
                project at N-Technologies. Proficient in modern stacks like
                React.js, Node.js, MongoDB, and Express.js, they specialize in
                building scalable, secure, and user-friendly applications.
              </p>
              <img src={anku} alt="" />
            </div>
          </div>
          <div className="team">
            <h3>Sharad Rajput</h3>
            <h4>Skilled Backend Developer</h4>
            <hr />
            <div className="personal-team">
              <img src={sharad} alt="" />
              <p>
                Sharad Rajput is a passionate backend developer at
                N-Technologies, specializing in building robust, scalable, and
                secure server-side applications. With strong command over
                technologies like Node.js, Express.js, MongoDB, MySQL, and
                RESTful APIs, they ensure that every project runs smoothly
                behind the scenes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
