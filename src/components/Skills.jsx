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
          {/* Programming Languages */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={languagesIcon} alt="Languages Icon" className="skills-icon" />
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li>
              <li>C</li>
              <li>Java</li>
              <li>F#</li>
              <li>SQL</li>
              <li>JavaScript</li>
            </ul>
          </div>
          {/* Web Development */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={frameworksIcon} alt="Web Development Icon" className="skills-icon" />
            <h3>Web Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Express</li>
            </ul>
          </div>
          {/* Backend Frameworks */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={frameworksIcon} alt="Backend Frameworks Icon" className="skills-icon" />
            <h3>Backend Frameworks</h3>
            <ul>
              <li>FastAPI</li>
              <li>Django</li>
              <li>JWT</li>
              <li>Axios</li>
            </ul>
          </div>
          {/* Machine Learning */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={toolsIcon} alt="Machine Learning Icon" className="skills-icon" />
            <h3>Machine Learning</h3>
            <ul>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>Matplotlib</li>
              <li>Seaborn</li>
              <li>Scikit-learn</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>OpenCV</li>
              <li>Hugging Face</li>
              <li>FAISS</li>
              <li>RAG</li>
            </ul>
          </div>
          {/* Cloud & DevOps */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={toolsIcon} alt="Cloud & DevOps Icon" className="skills-icon" />
            <h3>Cloud & DevOps</h3>
            <ul>
              <li>AWS</li>
              <li>IBM Cloud</li>
              <li>Firebase</li>
              <li>Docker</li>
              <li>Render</li>
              <li>Vercel</li>
              <li>Railway</li>
            </ul>
          </div>
          {/* Databases & Tools */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={toolsIcon} alt="Databases & Tools Icon" className="skills-icon" />
            <h3>Databases & Tools</h3>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Microsoft Office</li>
            </ul>
          </div>
          {/* Certifications */}
          <div className="skills-category" data-aos="zoom-in">
            <img src={toolsIcon} alt="Certifications Icon" className="skills-icon" />
            <h3>Certifications</h3>
            <ul>
              <li>AWS Certified Cloud Practitioner</li>
              <li>NVIDIA Certified - Building Transformer-Based NLP Applications</li>
              <li>NVIDIA Certified - Fundamentals of Deep Learning</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
