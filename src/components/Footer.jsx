/* eslint-enable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <p>&copy; 2025 Abinaya M. All rights reserved.</p>
        <div className="footer-social">
          <a
            href="https://github.com/M-Abinayarit?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abinaya-m-a87871215/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:mabishyamala@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
