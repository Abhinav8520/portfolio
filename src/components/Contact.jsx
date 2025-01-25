import React from "react";
import "../styles/Contact.css";
import phoneIcon from "../assets/phone-icon.png";
import emailIcon from "../assets/email-icon.png"; 
import linkedinIcon from "../assets/linkedin-icon.png"; 
import githubIcon from "../assets/github-icon.png"; 

const Contact = () => {
  return (
    <footer id="contact" className="contact-footer">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <ul className="contact-list">
          <li className="contact-item">
            <img src={phoneIcon} alt="Phone" className="contact-icon" />
            <span>786-585-6929</span>
          </li>
          <li className="contact-item">
            <img src={emailIcon} alt="Email" className="contact-icon" />
            <a href="mailto:abhinavkapavarapu@gmail.com" target="_blank" rel="noopener noreferrer">
              abhinavkapavarapu@gmail.com
            </a>
          </li>
          <li className="contact-item">
            <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
            <a href="https://linkedin.com/in/abhinav-kapavarapu" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/abhinav-kapavarapu
            </a>
          </li>
          <li className="contact-item">
            <img src={githubIcon} alt="GitHub" className="contact-icon" />
            <a href="https://github.com/Abhinav8520" target="_blank" rel="noopener noreferrer">
              github.com/Abhinav8520
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Contact;
