import React from "react";
import { Link } from "react-router-dom";
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
              Our digital marketing services ensure that your business and the
              services are gaining maximum engagement.
            </p>
          </div>
          <div className="content">
            <h3>Website Development</h3>
            <p>
              With us you will get the unparalleled web development services, as
              we utilize the knowledge of the latest technologies and give you a
              tailored website.
            </p>
          </div>
          <div className="content">
            <h3>E-commerce Development</h3>
            <p>
              Being your Ecommerce Website Development Company, we help to
              create an impeccable online store with single vendor and
              multi-vendor capabilities.
            </p>
          </div>
          <div className="content">
            <h3>Graphic Designing</h3>
            <p>
              Graphic is the skin of your website, with extensive experience in
              the domain, we as your Graphic Designing Company provide the best
              UI and UX for your website with engaging and responsive designs.
            </p>
          </div>
          <div className="content">
            <h3>Content Writing</h3>
            <p>
              Content is the king and we are the kingmakers. Our content writing
              services will help your business rank higher in Google search
              results making us the Best SEO Company.
            </p>
          </div>
          <div className="content">
            <h3>Software Development</h3>
            <p>
              Our developers provide exceptional Softwares that will that will
              help you to make your ideas in real life bussiness.
            </p>
          </div>
          <div className="content">
            <h3>UI/UX Design</h3>
            <p>
              User experience is everything. It always has been, but it's still
              undervalued and underinvested in. <br />The details are not the details. They make the design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
