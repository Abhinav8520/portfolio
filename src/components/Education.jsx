import React from "react";
import "../styles/Education.css";
import ufLogo from "../assets/uf-logo.png"; 
import agiLogo from "../assets/agi-logo.png"; 

const Education = () => {
  const educationDetails = [
    {
      institution: "University of Florida",
      location: "Gainesville, FL",
      duration: "Aug 2023 – May 2025",
      degree: "Masters in Computer and Information Science and Engineering",
      cgpa: "CGPA: 3.93/4.0",
      logo: ufLogo,
    },
    {
      institution: "Anurag Group of Institutions (AGI)",
      location: "Hyderabad, India",
      duration: "Aug 2019 - June 2023",
      degree: "Bachelors in Electronics and Communication Engineering",
      cgpa: "CGPA: 8.06/10",
      logo: agiLogo,
    },
  ];

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationDetails.map((edu, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            <div className="timeline-content">
              <img src={edu.logo} alt={`${edu.institution} logo`} className="institution-logo" />
              <h3 className="institution-name">{edu.institution}</h3>
              <p className="degree">{edu.degree}</p>
              <p className="cgpa">{edu.cgpa}</p>
              <p className="duration-location">
                {edu.duration} • {edu.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
