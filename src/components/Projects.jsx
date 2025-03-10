import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects I've worked on.
        </p>
        <div className="project-grid">
          <div className="project-card">
            <div className="project-content">
              <h3>E-commerce App</h3>
              <p>Developed an E-commerce app using MERN stack.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">Javascript</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express.js</span>
                <span className="tag">MongoDB</span>
              </div>
              <button
                className="project-link"
                onClick={() => (window.location.href = "#")}
              >
                View Project <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-content">
              <h3>TODO App</h3>
              <p>Developed an app to track you Todos.</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">Javascript</span>
                <span className="tag">Node.js</span>
                <span className="tag">Express.js</span>
                <span className="tag">MongoDB</span>
              </div>
              <button
                className="project-link"
                onClick={() => (window.location.href = "#")}
              >
                View Project <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-content">
              <h3>Payroll Management</h3>
              <p>
                Developed a payroll management website to display employee
                details of how many days he had worked and how much salary he
                earns in quick manner.
              </p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">HTML</span>
                <span className="tag">Node.js</span>
                <span className="tag">Javascript</span>
                <span className="tag">Express.js</span>
                <span className="tag">CSS</span>
              </div>
              <button
                className="project-link"
                onClick={() => (window.location.href = "#")}
              >
                View Project <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-content">
              <h3>Fake News Detection</h3>
              <p>
                Detected the fake news using KNN and Naïve Bayes algorithms and
                calculated the accuracy by giving new data to predict whether
                the data is real or fake.
              </p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Machine Learning</span>
              </div>
              <button
                className="project-link"
                onClick={() => (window.location.href = "#")}
              >
                View Project <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
          <div className="project-card">
            <div className="project-content">
              <h3>Multiperson pose estimation and part segmentation</h3>
              <p>
                Models and Dataset used : MoveNet , Mask R-CNN & COCO The main
                purpose is to detect and localize key points, such as joints,for
                all individuals in a video frame. Then identify and delineate
                the poses of multiple people by setting boundaries for more
                clarity within a complex scene, which can include occlusions,
                varying scales, and differentoses.
              </p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Machine Learning</span>
              </div>
              <button
                className="project-link"
                onClick={() => (window.location.href = "#")}
              >
                View Project <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
