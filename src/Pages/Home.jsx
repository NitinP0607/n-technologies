import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/hg.jpg";
import "./Home.css";
import teams from "../assets/teams.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home-section">
        <div className="left-home-section">
          <h1>
            N-Technologies <br />
            <span>Top Services</span>
          </h1>
          <p>We Provide Best Quality Product and Services</p>
          <marquee behavior="right" direction="alternate" scrollamount="">
            <span>We are also connects you with the best freelancers</span>
          </marquee>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="right-home-section">
          <img src={teams} alt="img not found" />
        </div>
      </div>
      <div className="home-bottom-section">
         <h2>What We Provide.. ?</h2>
        <div className="contents">
          <div className="content">
            <h3>Website Design</h3>
            <p>
              Our developers provide exceptional web designs that will seize the
              attention of the visitors and ensure to provide maximum leads.
            </p>
          </div>
          <div className="content">
            <h3>Digital Marketing</h3>
            <p>
              Website DevelopmentOur developers provide exceptional web designs
              that will seize the attention of the visitors and ensure to
              provide maximum leads.
            </p>
          </div>
          <div className="content">
            <h3>Website Development</h3>
            <p>
              Our developers provide exceptional web designs that will seize the
              attention of the visitors and ensure to provide maximum leads.
            </p>
          </div>
           <div className="content">
            <h3>Website Development</h3>
            <p>
              Our developers provide exceptional web designs that will seize the
              attention of the visitors and ensure to provide maximum leads.
            </p>
          </div>
           <div className="content">
            <h3>Website Development</h3>
            <p>
              Our developers provide exceptional web designs that will seize the
              attention of the visitors and ensure to provide maximum leads.
            </p>
          </div>
           <div className="content">
            <h3>Website Development</h3>
            <p>
              Our developers provide exceptional web designs that will seize the
              attention of the visitors and ensure to provide maximum leads.
            </p>
          </div>
           <div className="content">
            <h3>Website Development</h3>
            <p>
              Our developers provide exceptional web designs that will seize the
              attention of the visitors and ensure to provide maximum leads.
            </p>
          </div>
           <div className="content">
            <h3>Website Development</h3>
            <p>
              Our developers provide exceptional web designs that will seize the
              attention of the visitors and ensure to provide maximum leads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
