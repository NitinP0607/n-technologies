import React from "react";
import "./About.css";
import nittu from "../assets/nittu.jpg";
import prakki from "../assets/prakki.jpg";
import anku from "../assets/anku.jpg";
import sharad from "../assets/sharad.jpg";
import akash from "../assets/akash_dp.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="who-we-are">
        <section className="intro">
          <h1>Who We Are</h1>
          <p>
            At <strong>N-Technologies</strong>, we are a team of passionate
            innovators, developers, and digital experts dedicated to building
            solutions that drive impact. We turn ideas into high-quality
            products and services.
          </p>
        </section>

        <section className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To empower businesses and individuals through innovative
              technology and design solutions that inspire, connect, and grow.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be a trusted global partner in digital transformation,
              delivering excellence in every line of code and design.
            </p>
          </div>
        </section>

        <section className="quotes">
          <h2>What Drives Us</h2>
          <blockquote>
            "Technology is best when it brings people together." <br />– Matt
            Mullenweg
          </blockquote>
          <blockquote>
            "Design is not just what it looks like and feels like. Design is how
            it works." <br />– Steve Jobs
          </blockquote>
          <blockquote>
            "Great things in business are never done by one person. They're done
            by a team of people." <br />– Steve Jobs
          </blockquote>
        </section>
      </div>
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
              <img src={nittu} alt="" />
              <p>
                Nitin Patel is the Founder and Senior Web Developer at
                N-Technologies, a digital agency committed to delivering
                creative and high-performing web solutions. With over 5+ years
                of experience in full-stack web development, he leads the team
                with a blend of technical expertise and business vision.
              </p>
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
              <img src={anku} alt="" />
              <p>
                With deep expertise in both frontend and backend technologies,
                Ankit Rajput brings innovative solutions and clean code to every
                project at N-Technologies. Proficient in modern stacks like
                React.js, Node.js, MongoDB, and Express.js, they specialize in
                building scalable, secure, and user-friendly applications.
              </p>
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
          <div className="team">
            <h3>Akash Kumar</h3>
            <h4>Social Media Manager</h4>
            <hr />
            <div className="personal-team">
              <img src={akash} alt="" />
              <p>
                Akash Kumar Social Media Manager with 3+ years of experience building brand
                presence across Instagram, LinkedIn, Facebook, and YouTube. I
                specialize in content strategy, performance analytics, paid ads,
                and community engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="contact-main-about">
          <div className="contact-info-about">
            <h2>N-Technologies</h2>
            <p>
              <strong>Address:</strong> 123 Near Primary School kachatipur,
              kannauj, Uttar Pradesh, India
            </p>
            <p>
              <strong>Email:</strong> contact@n-technologies.in
            </p>
            <p>
              <strong>Phone:</strong> +91-9026532143
            </p>
            <p>
              <strong>Office Hours:</strong> Mon - Sat, 10:00 AM - 6:00 PM
            </p>
          </div>

          <div className="contact-map-about">
            <iframe
              title="N-Technologies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.761089265838!2d79.68270817576511!3d26.942787458796918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e0d6ad42bea1b%3A0xf30dda011fb5403e!2sN-technologies!5e0!3m2!1sen!2sin!4v1753317388138!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
