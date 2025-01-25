import React, { useEffect } from "react";
import "../styles/Skills.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import languagesIcon from "../assets/languages.png";
import frameworksIcon from "../assets/frameworks.png";
import toolsIcon from "../assets/tools.png";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })}); 

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2 className="section-title" data-aos="fade-up">Skills</h2>
        <div className="skills-categories">
          {/* Languages */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={languagesIcon} alt="Languages Icon" className="skills-icon" />
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
              <li>C</li>
              <li>Java</li>
              <li>F#</li>
              <li>SQL</li>
              <li>JavaScript</li>
            </ul>
          </div>
          {/* Web Frameworks and Databases */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={frameworksIcon} alt="Frameworks Icon" className="skills-icon" />
            <h3>Web Frameworks & Databases</h3>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>React</li>
              <li>Django</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          {/* Tools and Cloud Technologies */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={toolsIcon} alt="Tools Icon" className="skills-icon" />
            <h3>Tools & Cloud Technologies</h3>
            <ul>
              <li>AWS</li>
              <li>IBM Cloud</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Android Studio</li>
              <li>Microsoft Office</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Skills;
