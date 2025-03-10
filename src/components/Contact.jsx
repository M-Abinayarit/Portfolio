import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind or want to chat? Feel free to reach out.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Ways to reach me directly</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>mabishyamala@gmail.com</p>
              </div>
              {/* Add more contact details here */}
            </div>
          </div>
          <div className="contact-form">
            <h3>Send a Message</h3>
            <p>I'll get back to you as soon as possible</p>
            <form id="contactForm">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
