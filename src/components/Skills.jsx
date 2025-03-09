import React from "react";
import "../assets/styles.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>
          <div className="skill-category">
            <div className="skill-icon">
              <i className="fas fa-code"></i>
            </div>
            <h3>Backend</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
