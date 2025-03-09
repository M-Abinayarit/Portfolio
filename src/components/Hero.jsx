import React from "react";
import "../assets/styles.css";
import profileImage from "../assets/images/profile.jpg"; // Import the image

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Abinaya M</h1>
            <p className="subtitle">Frontend Developer</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn btn-outline">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
