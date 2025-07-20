import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/hg.jpg'
import './Home.css'
import teams from '../assets/teams.jpg'

const Home = () => {
  return (
   <div className="home">
     <div className="home-section">
        <div className="left-home-section">
          <h1>
            N Technologies<br />
            <span>Top Services</span>
          </h1>
          <p>We Provide Best Quality Product and Services</p>
          <span>We are also connects you with the best freelancers</span>
          <Link to="/contact">Contact us</Link>
        </div>
        <div className="right-home-section">
          <img src={teams} alt="img not found" />
        </div>
      </div>
      <div className="home-bottom-section">
        <h2></h2>
      </div>
   </div>
  )
}

export default Home
