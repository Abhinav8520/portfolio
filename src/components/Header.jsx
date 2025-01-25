import React from "react";
import "../styles/Header.css";
import homeIcon from "../assets/home.png"; 
import skillsIcon from "../assets/skills.png";
import projectsIcon from "../assets/projects.png";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";
import contactIcon from "../assets/contact.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">
              <img src={homeIcon} alt="Home" className="nav-icon" />
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link">
              <img src={skillsIcon} alt="Skills" className="nav-icon" />
              <span>Skills</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link">
              <img src={projectsIcon} alt="Projects" className="nav-icon" />
              <span>Projects</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link">
              <img src={experienceIcon} alt="Experience" className="nav-icon" />
              <span>Experience</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#education" className="nav-link">
              <img src={educationIcon} alt="Education" className="nav-icon" />
              <span>Education</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link">
              <img src={contactIcon} alt="Contact" className="nav-icon" />
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
